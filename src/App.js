import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects'
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;