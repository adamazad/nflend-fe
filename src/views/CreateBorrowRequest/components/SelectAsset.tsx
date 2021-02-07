// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import Select from 'react-select'

// Styles
import { styles } from 'src/styles/select'

interface SelectAssetProps {
  onChange?: (asset: OpenSeaAsset) => void
  assets: OpenSeaAsset[]
}

export function SelectAsset({ assets, onChange = () => {} }: SelectAssetProps) {
  return (
    <Select
      styles={styles}
      placeholder="Selet an NFT"
      options={assets}
      defaultValue={assets[0]}
      isMulti={false}
      getOptionLabel={option => option.name}
      getOptionValue={option => `${option.assetContract}-${option.tokenId}`}
      onChange={asset => {
        console.log(asset)
        asset && onChange(asset)
      }}
    />
  )
}
