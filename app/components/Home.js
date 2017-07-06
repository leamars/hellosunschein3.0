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

    this.toggleDetails = this.toggleDetails.bind(this);
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
    var shouldShowDetails = false;
    var projectId; // Grabs project ID from URL

    // If we're on a URL that has path params, it means we should show project details
    if (this.props.match) {
      projectId = this.props.match.params.projectId;
    }

    var projectFull;
    // If we're supposed to show product details, set shouldShowDetails to true
    if (projectId) {
      projectFull = ProjectAPI.get(projectId);
      shouldShowDetails = true;
    }

    console.log("Project ID? " + projectId);

    var animationOptions = [
      "anim2",
      "anim3",
      "anim4",
      "anim5"
    ]

    var animation = animationOptions[Math.floor(Math.random() * (animationOptions.length))];

    if (projectFull && shouldShowDetails) {
      return (
        <div>

          <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionLeaveTimeout={0} transitionEnter={false}>
            <div>
              <QuadGrid
                projects= {ProjectAPI.all()}
                handleOnOpen = {this.toggleDetails}
              />
            </div>
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup transitionName={animation} transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <QuadDetails
              handleOnClose = {this.toggleDetails}
              projectId = {projectId}
            />

          </ReactCSSTransitionGroup>
        </div>
      )
    } else {
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
}

Home.propTypes = {
  handleScroll: PropTypes.func,
  scrollPositionTop: PropTypes.number
}

Home.contextTypes = {
  scrollFromTop: PropTypes.number
};

module.exports = Home;
