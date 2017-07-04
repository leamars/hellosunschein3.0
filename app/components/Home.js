import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import QuadGrid from './QuadGrid';
import ProjectAPI from '../utils/Api';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import QuadDetails from './QuadDetails';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingDetails: false
    }

    this.toggleDetails = this.toggleDetails.bind(this);

  }

  toggleDetails() {
    this.setState({showingDetails: !this.state.showingDetails});
    console.log("CLOSINGGGGG");
  }

  render() {
    console.log("HELLO, THIS IS HOME...");

    console.log(ProjectAPI);
    var projectId = this.props.match.params.projectId // Grabs project ID from URL
    var exists = ProjectAPI.get(projectId);
    console.log("This project exists in the API - ", exists);

    if (exists && this.state.showingDetails) {
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

          <ReactCSSTransitionGroup transitionName="anim2" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <QuadDetails
              projectId= {projectId}
              handleOnClose = {this.toggleDetails}
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

module.exports = Home;
