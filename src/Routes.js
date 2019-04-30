import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Hjem from './containers/Hjem'
import NotFound from './components/NotFound'
import AppliedRoute from './components/AppliedRoute'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'
import GodkjentListe from './containers/GodkjentListe'
import Helse from './containers/Helse'

export default ({ childProps }) =>
  <Switch>

    { /* applied routes */ }
    <AppliedRoute
      path='/'
      exact
      component={Hjem}
      props={childProps} />

    { /* unauthenticated routes */ }

    <AuthenticatedRoute
      path='/approved'
      exact
      component={GodkjentListe}
      props={childProps} />

    { /* testing purposes */ }

    <UnauthenticatedRoute
      path='/health'
      exact
      component={Helse}
      props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />

  </Switch>
