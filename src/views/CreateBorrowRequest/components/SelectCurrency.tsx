// Externals
import Select from 'react-select'

const mapCurrencyToSelect = (asset: Currency) => ({
  label: asset.name,
  value: asset.id,
})

interface Currency {
  id: string
  name: string
}

interface SelectCurrencyProps {
  onChange?: (asset: Currency) => void
  currencies?: Currency[]
}

export const CURRENCY_LIST: Currency[] = [
  {
    id: '0xc2118d4d90b274016cb7a54c03ef52e6c537d957',
    name: 'DAI',
  },
  {
    id: '0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c',
    name: 'USDC',
  },
  {
    id: '0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c',
    name: 'TUSD',
  },
  {
    id: '0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c',
    name: 'YFI',
  },
]

export function SelectCurrency({ currencies = CURRENCY_LIST, onChange }: SelectCurrencyProps) {
  return (
    <Select
      placeholder="Select a currency"
      defaultInputValue={'DAI'}
      options={currencies.map(mapCurrencyToSelect)}
      isMulti={false}
      onChange={value =>
        onChange &&
        onChange({
          id: value?.value,
          name: value?.label,
        } as Currency)
      }
    />
  )
}
