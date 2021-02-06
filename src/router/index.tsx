// Externals
import { Route, Switch } from 'react-router-dom'

// Views
import { CreateBorrowRequestView } from 'src/views/CreateBorrowRequest'
import { BorrowRequestsView } from 'src/views/BorrowRequests'
import { BorrowRequestView } from 'src/views/BorrowRequest'
import { LeverageView } from 'src/views/Leverage'
import { NotFoundView } from 'src/views/NotFound'
import { LandingView } from 'src/views/Landing'
import { EarnView } from 'src/views/Earn'

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/lend" component={EarnView} />
      <Route exact path="/leverage" component={LeverageView} />
      <Route exact path="/borrow-requests" component={BorrowRequestsView} />
      <Route exact path="/borrow-requests/new" component={CreateBorrowRequestView} />
      <Route exact path="/borrow-requests/:borrowRequestId" component={BorrowRequestView} />
      <Route exact path="/" component={LandingView} />
      <Route exact path="*" component={NotFoundView} />
    </Switch>
  )
}
