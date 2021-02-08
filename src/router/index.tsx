// Externals
import { Provider } from '@ethersproject/providers'
import { Route, Switch } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'

// Constants
import { KOVAN_NETWORK_ID } from 'src/constants'

// Views
import { CreateBorrowRequestView } from 'src/views/CreateBorrowRequest'
import { BorrowRequestsView } from 'src/views/BorrowRequests'
import { BorrowRequestView } from 'src/views/BorrowRequest'
import { NetworkErrorView } from 'src/views/NetworkError'
import { LeverageView } from 'src/views/Leverage'
import { NotFoundView } from 'src/views/NotFound'
import { LandingView } from 'src/views/Landing'
import { EarnView } from 'src/views/Earn'
import { LendView } from 'src/views/Lend'

export const AppRouter = () => {
  const { chainId, active } = useWeb3React<Provider>()

  if (active && chainId != KOVAN_NETWORK_ID) {
    return <NetworkErrorView />
  }

  return (
    <Switch>
      <Route exact path="/lend/:borrowRequestId" component={LendView} />
      <Route exact path="/borrow-requests/new" component={CreateBorrowRequestView} />
      <Route exact path="/borrow-requests/:borrowRequestId" component={BorrowRequestView} />
      <Route exact path="/borrow-requests" component={BorrowRequestsView} />
      <Route exact path="/earn" component={EarnView} />
      <Route exact path="/leverage" component={LeverageView} />
      <Route exact path="/" component={LandingView} />
      <Route exact path="*" component={NotFoundView} />
    </Switch>
  )
}
