import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import QuadGrid from './QuadGrid';
import ProjectAPI from '../utils/Api';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import QuadDetails from './QuadDetails';
import PropTypes from 'prop-types';

class Home extends React.Component {

  constructor(props) {
    super(props);

    //this.toggleDetails = this.toggleDetails.bind(this);
  }

  // This method helps maintain the scrolling position for the users
  // ------------------------
  // App saves scrollTop to context
  // Home reads scrollTop from context when navigating TO Project Details
  // When navigating FROM Project Details we pass back quadDetailsScrollTop
  // If we're not navigating back from Project Details, quadDetailsScrollTop will be undefined
  // -------------------------
  // App context - scrollTop => Home => Render
  // Project details - quadDetailsScrollTop => Home => Render

  toggleDetails(quadDetailsScrollTop) {

    var scrollTop = this.context.scrollFromTop;
    // If we got scrollTop data passed from details view, use that instead
    if (quadDetailsScrollTop) {
      scrollTop = quadDetailsScrollTop;
    }

    setTimeout(() => {
      window.scrollTo(0, scrollTop);
    });
  }

  render() {

    var animationOptions = [
      "anim2",
      "anim3",
      "anim4",
      "anim5"
    ]

    var animation = animationOptions[Math.floor(Math.random() * (animationOptions.length))];

    return (
      <div>
        <QuadGrid
          projects= {ProjectAPI.all()}
          handleOnOpen = {this.toggleDetails}
        />
      </div>
    )

  }
}

Home.propTypes = {
  handleScroll: PropTypes.func,
  scrollPositionTop: PropTypes.number
}

Home.contextTypes = {
  scrollFromTop: PropTypes.number
};

module.exports = Home;
