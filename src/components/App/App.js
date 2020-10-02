import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Adopt from '../../routes/Adopt'
import LandingPage from '../../routes/LandingPage'

function App() {
  return <div>
    <header>
    <Link to={'/'}><h1>Petful</h1></Link>
    </header>

   

    <Switch>
      <Route
        exact
        path={'/'}
        component={LandingPage}
      />
      <Route
        exact
        path={'/adopt'}
        component={Adopt}  
      />
    </Switch>
  </div>
}

export default App
