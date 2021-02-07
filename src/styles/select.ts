import { StylesConfig } from 'react-select'

export const styles: StylesConfig<any, any, any> = {
  control: base => ({
    ...base,
    borderRadius: 0,
    borderColor: '#000',
    background: '#000',
  }),
  valueContainer: base => ({
    ...base,
    background: 'transparent',
  }),
  menuList: base => ({
    ...base,
    background: '#000',
  }),
  option: base => ({
    ...base,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: base => ({
    ...base,
    color: '#fff',
  }),
}
