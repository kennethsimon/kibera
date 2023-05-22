import React from 'react'
import { Switch, Route } from 'react-router-dom'
import First from './components/home';


const App = () => {
return (
  <Switch>
    <Route exact path='/'>
    <First />
    </Route>
</Switch>
)
}

export default App