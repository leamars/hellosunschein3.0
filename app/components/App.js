import React, { Component } from 'react';
import ReactRouter, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import QuadDetails from './QuadDetails';

class App extends React.Component {
  render() {

    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route path="/projects/:projectId" component={Home}  />
            <Route render={function() {
              return <p>404 - Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
