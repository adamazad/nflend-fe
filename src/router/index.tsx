// External
import { Route, Switch } from 'react-router-dom'
import React from 'react'

// Views
import { NotFoundView } from 'src/views/NotFound'
import { ConnectView } from 'src/views/Connect'
import { LandingView } from 'src/views/Landing'
import { BorrowView } from 'src/views/Borrow'
import { LendView } from 'src/views/Lend'

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/connect" component={ConnectView} />
      <Route exact path="/borrow" component={BorrowView} />
      <Route exact path="/lend" component={LendView} />
      <Route exact path="/" component={LandingView} />
      <Route exact path="*" component={NotFoundView} />
    </Switch>
  )
}
