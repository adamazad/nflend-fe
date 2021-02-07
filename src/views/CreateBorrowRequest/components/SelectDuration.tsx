// Externals
import Select from 'react-select'

// Styles
import { styles } from 'src/styles/select'

// Common intervals in seconds
// Not very accurate
const ONE_MINUTE = 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_MONTH = ONE_HOUR * 24 * 30
const ONE_YEAR = ONE_MONTH * 12

export interface Duration {
  value: number
  label: string
}

interface SelectAssetProps {
  onChange?: (duration: Duration) => void
}

export const DURATION_LIST: Duration[] = [
  {
    value: ONE_MONTH,
    label: 'One Month',
  },
  {
    value: ONE_MONTH * 6,
    label: 'Six Months',
  },
  {
    value: ONE_YEAR,
    label: 'One Year',
  },
]

export function SelectDuration({ onChange }: SelectAssetProps) {
  return (
    <Select
      styles={styles}
      placeholder="Select a duration"
      defaultValue={DURATION_LIST[0]}
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
