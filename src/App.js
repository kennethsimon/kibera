import React from 'react'
import { Switch, Route } from 'react-router-dom'
import First from './components/newhomepage';
import Aboutus from './components/aboutustwo';
import Team from './components/team';
import Insurance from './components/insurance';
import Contactus from './components/contactustwo';


const App = () => {
return (
  <Switch>
    <Route exact path='/'>
    <First />
    </Route>
    <Route exact path='/aboutus'>
    <Aboutus />
    </Route>
    <Route exact path='/projects'>
    <Team />
    </Route>
   
    <Route exact path='/contactus'>
    <Contactus />
    </Route> 
    <Route path='/projects/:projectId'  render={(props) => {
          return ( <Insurance {...props } /> )
        }} />
</Switch>
)
}

export default App