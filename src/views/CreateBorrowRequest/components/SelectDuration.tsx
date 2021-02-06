// Externals
import Select from 'react-select'

interface Duration {
  value: string
  label: string
}

interface SelectAssetProps {
  onChange?: (asset: Duration) => void
}

export const DURATION_LIST: Duration[] = [
  {
    value: 'One Week',
    label: 'One Week',
  },
  {
    value: 'One Month',
    label: 'One Month',
  },
  {
    value: 'Six Months',
    label: 'Six Months',
  },
  {
    value: 'Three Years',
    label: 'Three Years',
  },
  {
    value: 'Three Years',
    label: 'Three Years',
  },
  {
    value: 'Three Years',
    label: 'Three Years',
  },
]

export function SelectDuration({ onChange }: SelectAssetProps) {
  return (
    <Select
      placeholder="Select a currency"
      defaultInputValue={'DAI'}
      options={DURATION_LIST}
      isMulti={false}
      onChange={value =>
        onChange &&
        onChange({
          value: value?.value,
          label: value?.label,
        } as Duration)
      }
    />
  )
}
