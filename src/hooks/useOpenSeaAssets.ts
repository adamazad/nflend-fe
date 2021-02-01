// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'

// APIs
import { getOpeanSeaAPI } from 'src/providers'

interface UseOpenSeaAssetsReturn {
  error: Error | false
  loading: boolean
  assets: OpenSeaAsset[]
}

export function useOpenSeaAssets(): UseOpenSeaAssetsReturn {
  const [error, setError] = useState<Error | false>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [assets, setAssets] = useState<OpenSeaAsset[]>([])
  const { account } = useWeb3React()

  useEffect(() => {
    const openSea = getOpeanSeaAPI()

    openSea
      .getAssets({
        owner: account as string,
      })
      .then(({ assets }) => setAssets(assets))
      .catch(setError)
      .then(() => setLoading(false))
  }, [account])

  return {
    error,
    assets,
    loading,
  }
}
