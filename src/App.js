import React from 'react';
import {BrowserRouter  as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './users/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'

function App() {
  return (
    <Router>
      <MainNavigation/>
       <Switch>
        <Route path="/" exact >
          <Users/>
        </Route>
        <Route path="/places/new" >
          <NewPlace/>
        </Route>
        <Redirect to="/" />
        </Switch>
      </Router>
    )
}

export default App;
