// Externals
import Select from 'react-select'

// Styles
import { styles } from 'src/styles/select'

interface SelectRateModeProps {
  onChange?: (asset: RateMode) => void
}

export interface RateMode {
  value: string
  name: string
}

const RATEMODE_LIST: RateMode[] = [
  {
    name: 'Fixed',
    value: 'fixed',
  },
  {
    name: 'Variable',
    value: 'variable',
  },
]

export function SelectRateMode({ onChange = () => {} }: SelectRateModeProps) {
  return (
    <Select
      styles={styles}
      placeholder="Selet an NFT"
      options={RATEMODE_LIST}
      defaultValue={RATEMODE_LIST[0]}
      isMulti={false}
      getOptionLabel={option => option.name}
      getOptionValue={option => option.value}
      onChange={asset => {
        console.log(asset)
        asset && onChange(asset)
      }}
    />
  )
}
