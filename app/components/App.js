import React, { Component } from 'react';
import ReactRouter, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import QuadDetails from './QuadDetails';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollFromTop: 0
    }

    this.storeScrollIfNeeded = this.storeScrollIfNeeded.bind(this);
    this.renderHomeComponent = this.renderHomeComponent.bind(this);
  }

  getChildContext() {
    return { scrollFromTop: this.state.scrollFromTop };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.storeScrollIfNeeded);
  }

  // Grab scroll position from home, so that we can return to that position when we close the details view, so that the user doesn't have to search through all the projects from the start
  storeScrollIfNeeded() {
    var scrollFromTop = document.body.scrollTop;
    var currentLocation = window.location.pathname;

    if (currentLocation == "/" || currentLocation.startsWith("/projects")) {
      this.setState({scrollFromTop: scrollFromTop});
    }
  }

  renderHomeComponent() {
    var scrollTop = this.state.scrollFromTop;
    return (
      <Home scrollPositionTop = {scrollTop}/>
    )
  }

  render() {

    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' render={this.renderHomeComponent}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route path="/projects/:projectId" component={Home} />
            <Route render={function() {
              return <p>404 - Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.childContextTypes = {
  scrollFromTop: PropTypes.number
};

module.exports = App;
