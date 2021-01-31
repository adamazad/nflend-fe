// External
import { ChangeEvent, useState } from 'react'

type OnChange = (event: ChangeEvent<HTMLInputElement>) => void

export function useInput<S>(defaultValue: S): [S, OnChange] {
  const [value, setValue] = useState(defaultValue)

  return [
    value,
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value as any)
    },
  ]
}
