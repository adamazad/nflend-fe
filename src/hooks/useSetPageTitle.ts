import { useDispatch } from 'react-redux'

// Actions
import { setPageTitle } from 'src/redux/page'

export function useSetPageTitle() {
  const dispatch = useDispatch()

  return (pageTitle: string) => dispatch(setPageTitle(pageTitle))
}
