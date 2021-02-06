// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import Select from 'react-select'

const mapOpeanSeaAssetToSelect = (asset: OpenSeaAsset) => ({
  label: asset.name,
  value: asset.tokenId,
})

interface SelectAssetProps {
  onChange?: (asset: OpenSeaAsset) => void
  assets: OpenSeaAsset[]
}

export function SelectAsset({ assets, onChange }: SelectAssetProps) {
  return <Select placeholder="Selet an NFT" options={assets.map(mapOpeanSeaAssetToSelect)} isMulti={false} />
}
