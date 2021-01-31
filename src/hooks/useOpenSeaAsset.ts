// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useEffect, useState } from 'react'

// APIs
import { getOpeanSeaAPI } from 'src/contracts'

interface UseOpenSeaAssetsReturn {
  error: Error | false
  isLoading: boolean
  asset: OpenSeaAsset | null
}

interface useOpenSeaAssetParams {
  tokenAddress: string
  tokenId: string | number | null
}

export function useOpenSeaAsset(query: useOpenSeaAssetParams, retries?: number | undefined): UseOpenSeaAssetsReturn {
  const [error, setError] = useState<Error | false>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [asset, setAsset] = useState<OpenSeaAsset | null>(null)

  useEffect(() => {
    const openSea = getOpeanSeaAPI()

    openSea
      .getAsset(query, retries)
      .then(setAsset)
      .catch(setError)
      .then(() => setIsLoading(false))
  }, [query, retries])

  return {
    error,
    asset,
    isLoading,
  }
}
