import { Provider } from '@ethersproject/providers'
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect, useState } from 'react'

import { ERC721Factory } from 'src/contracts'

interface UseAccountAssetsReturn {
  error: Error | false
  loading: boolean
  assets: OpenSeaAsset[]
}

// Mock Contract address
const MOCK_NFT_CONTRACT_ADDRESS = '0xe135941f95120810614d05129b84d63a88605641'

export function useAccountAssets(account: string): UseAccountAssetsReturn {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | false>(false)
  const [assets, setAssets] = useState<OpenSeaAsset[]>([])
  const { library } = useWeb3React<Provider>()

  const fetchAssets = useCallback(
    async (account: string) => {
      if (!library) return

      const erc721Contract = ERC721Factory.connect(MOCK_NFT_CONTRACT_ADDRESS, library)

      console.log(erc721Contract)

      try {
        const tokenIds = await erc721Contract.getOwnerTokens(account)

        console.log(tokenIds)

        tokenIds.forEach(async token => {
          const tokenMetadata = await erc721Contract.tokenMetadata(token)

          console.log(tokenMetadata)
        })
      } catch (e) {}
    },
    [library]
  )

  useEffect(() => {
    fetchAssets(account)
  }, [fetchAssets, account])

  return {
    error,
    assets,
    loading,
  }
}
