import React from 'react'
import { Switch, Route } from 'react-router-dom'
import First from './components/home';
import About from './components/about';
import Services from './components/service';
import Projects from './components/projects';
import Contact from './components/contact';


const App = () => {
return (
  <Switch>
    <Route exact path='/'>
    <First />
    </Route>
    <Route exact path='/about'>
    <About />
    </Route>
    <Route exact path='/services'>
    <Services />
    </Route>
    <Route exact path='/projects'>
    <Projects />
    </Route>
    <Route exact path='/contactus'>
    <Contact />
    </Route>
</Switch>
)
}

export default App