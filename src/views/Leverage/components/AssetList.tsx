// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import React from 'react'

interface AssetListProps {
  assets: OpenSeaAsset[]
}

export function AssetList({ assets }: AssetListProps) {
  return (
    <div>
      {assets.map(asset => {
        const key = `${asset.tokenAddress}/${asset.tokenId}`

        return <div key={key}>{asset.description}</div>
      })}
    </div>
  )
}
