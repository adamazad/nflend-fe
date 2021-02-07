import { useCallback, useEffect, useState } from 'react'
import { Provider } from '@ethersproject/providers'
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useWeb3React } from '@web3-react/core'
import Axios from 'axios'

// Helpers
import { mapFakeAavegotchiToOpenSeaAsset } from 'src/contracts/helpers'

import { MOCK_NFT_CONTRACT_ADDRESS } from 'src/constants'

// Contract Facotories
import { ERC721Factory } from 'src/contracts'

// Interfaces
import { TokenMetadata } from 'src/interfaces/TokenMetadata'

interface UseAccountAssetsReturn {
  error: Error | false
  loading: boolean
  assets: OpenSeaAsset[]
}

const tokenURICacheMap = new Map<string, TokenMetadata>()

async function fetchTokenURIData(url: string) {
  // Retrieve from cache
  if (tokenURICacheMap.has(url)) {
    return tokenURICacheMap.get(url) as TokenMetadata
  }

  const { data } = await Axios.get<TokenMetadata>(url)

  // Cache
  tokenURICacheMap.set(url, data)

  return data
}

export function useAccountAssets(account: string): UseAccountAssetsReturn {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | false>(false)
  const [assets, setAssets] = useState<OpenSeaAsset[]>([])
  const { library } = useWeb3React<Provider>()

  const fetchAssets = useCallback(
    async (account: string) => {
      if (!library) return

      const erc721Contract = ERC721Factory.connect(MOCK_NFT_CONTRACT_ADDRESS, library)

      try {
        const totalSupply = (await erc721Contract.totalSupply()).toNumber()

        const assets: OpenSeaAsset[] = []

        for (let index = 0; index <= totalSupply; index++) {
          try {
            const ownerOfToken = await erc721Contract.ownerOf(index)

            if (ownerOfToken === account) {
              const tokenURI = await erc721Contract.tokenURI(index)
              const data = await fetchTokenURIData(tokenURI)
              assets.push(mapFakeAavegotchiToOpenSeaAsset(data, index.toString()))
            }
          } catch (e) {}
        }

        setAssets(assets)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    },
    [library]
  )

  useEffect(() => {
    fetchAssets(account)
  }, [fetchAssets, account, library])

  return {
    error,
    assets,
    loading,
  }
}
