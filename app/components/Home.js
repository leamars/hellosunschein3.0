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

    this.state = {
      showingDetails: false
    }

    this.toggleDetails = this.toggleDetails.bind(this);

  }

  componentDidMount() {
    var scrollTop = this.props.scrollPositionTop;
    console.log("componentDidMount: " + scrollTop);
    setTimeout(() => {
      window.scrollTo(0, scrollTop);
    });
  }

  toggleDetails() {
    this.setState({showingDetails: !this.state.showingDetails});
    var scrollTop = this.props.scrollPositionTop;
    console.log("toggleDetails: " + scrollTop);
    setTimeout(() => {
      window.scrollTo(0, scrollTop);
    });
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {
    console.log("Component did update scroll top: " + scrollTop);
    setTimeout(() => {
      window.scrollTo(0, scrollTop);
    });
  }

  render() {
    //window.scrollTop = 500;

    var projectId; // Grabs project ID from URL
    if (this.props.match) {
      projectId = this.props.match.params.projectId;
    }


    var projectFull;
    if (projectId) {
      projectFull = ProjectAPI.get(projectId);
    }

    var animationOptions = [
      "anim2",
      "anim3",
      "anim4",
      "anim5"
    ]
    var animation = animationOptions[Math.floor(Math.random() * (animationOptions.length))];

    if (projectFull && this.state.showingDetails) {
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
              projectId = {projectId}
              handleOnClose = {this.toggleDetails}
              color = {projectFull.color}
              title = {projectFull.name}
              img = {projectFull.img}
              scrollDirection = "Left"
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

module.exports = Home;
