// Externals
import { useCallback, useEffect, useState } from 'react'
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

// Constants
import { KOVAN_NETWORK_ID } from 'src/constants'

// APIs
import { getOpeanSeaAPI, getWeb3Provider } from 'src/providers'
import { getToken } from 'src/contracts/mNFT'

interface UseOpenSeaAssetsReturn {
  error: Error | false
  loading: boolean
  asset: OpenSeaAsset | null
}

interface useOpenSeaAssetParams {
  tokenAddress: string
  tokenId: string | number
}

export function useOpenSeaAsset(query: useOpenSeaAssetParams, retries?: number | undefined): UseOpenSeaAssetsReturn {
  const [error, setError] = useState<Error | false>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [asset, setAsset] = useState<OpenSeaAsset | null>(null)
  const { library } = useWeb3React()

  const fetchAsset = useCallback(async () => {
    const provider: Provider = library || getWeb3Provider()

    const { chainId } = await provider.getNetwork()
    console.log(chainId)
    // On Kovan, use the MockNFT contract
    if (chainId === KOVAN_NETWORK_ID) {
      const asset = await getToken(query.tokenId as string, provider)
      setAsset(asset)
      setLoading(false)
    } else {
      const openSea = getOpeanSeaAPI()

      openSea
        .getAsset(query, retries)
        .then(setAsset)
        .catch(setError)
        .then(() => setLoading(false))
    }
  }, [])

  useEffect(() => {
    fetchAsset()
  }, [fetchAsset])

  return {
    error,
    asset,
    loading,
  }
}
