import React from 'react';
import {BrowserRouter  as Router, Route} from 'react-router-dom';
import Users from './users/pages/User'
import NewUser from './places/pages/NewPlace'

function App() {
  return <Router>
      <Route path="/" exact >
        <Users/>
      </Route>
      <Route path="/places/new">
        <NewUser/>
      </Route>
    </Router>
}

export default App;
