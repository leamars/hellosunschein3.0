import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import ProjectAPI from '../utils/Api';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class QuadDetails extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("Context in Quad Details " + this.context.scrollFromTop);
  }

  render() {

    var projectId = this.props.match.params.projectId
    var projectFull = ProjectAPI.get(projectId); // Grab project from API

    var currentScrollTop = this.context.scrollFromTop;
    return (
        <div
          className='quadDetailsContainer'
          style={{
            borderColor: projectFull.color,
            backgroundColor: projectFull.color
          }}
          //onClick={this.props.handleOnClose.bind(null, currentScrollTop)}
        >
          <p>{projectFull.name}</p>
          <Link to={{
            pathname: `/`,
            state: { modal: true }
          }}>
            <img src={projectFull.img} />
          </Link>
          <div className='quadDetailsContentBlock'></div>
          <div className='quadDetailsContentBlock'></div>
          <div className='quadDetailsContentBlock'></div>
          <div className='quadDetailsContentBlock'></div>
        </div>
    )
  }
}

// Either we get a projectID coming from the URL, OR we get the
QuadDetails.propTypes = {
  projectId: PropTypes.string,
  //handleOnClose: PropTypes.func.isRequired
}

QuadDetails.contextTypes = {
  scrollFromTop: PropTypes.number
};

module.exports = QuadDetails;
