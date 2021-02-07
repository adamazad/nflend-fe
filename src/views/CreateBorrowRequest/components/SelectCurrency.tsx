// Externals
import Select from 'react-select'
import { DAI_CONTRACT_ADDRESS } from 'src/constants'

// Styles
import { styles } from 'src/styles/select'

export interface Currency {
  address: string
  name: string
}

interface SelectCurrencyProps {
  onChange?: (asset: Currency) => void
  currencies?: Currency[]
}

export const CURRENCY_LIST: Currency[] = [
  {
    address: DAI_CONTRACT_ADDRESS,
    name: 'DAI',
  },
]

export function SelectCurrency({ currencies = CURRENCY_LIST, onChange = () => {} }: SelectCurrencyProps) {
  return (
    <Select
      styles={styles}
      placeholder="Select a currency"
      options={currencies}
      defaultValue={currencies[0]}
      getOptionLabel={option => option.name}
      getOptionValue={option => option.address}
      isMulti={false}
      onChange={value => value && onChange(value)}
    />
  )
}
