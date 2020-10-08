import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage'
import AboutPetfulPage from '../../components/About/AboutPetfulPage'
import Adopt from '../../routes/Adopt'
import SuccessStories from '../../routes/SuccessStories'

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
        path={'/about'}
        component={AboutPetfulPage}
      />

      <Route
        exact
        path={'/adopt'}
        component={Adopt}
      />
      <Route
        exact
        path={'/success'}
        component={SuccessStories}
      />
    </Switch>
  </div>
}

export default App
