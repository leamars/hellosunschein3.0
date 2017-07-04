import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import ProjectAPI from '../utils/Api';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function parseQuery(query) {
  var vars = query.toString().split('/');
  var param = vars[vars.length-1];

  return param;
}

class QuadDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var projectId = this.props.projectId // Grabs project ID from URL
    var exists = ProjectAPI.get(projectId);
    console.log("This project exists in the API - ", exists);
    return (
        <div className='quadDetailsContainer'> DETAILS!
          <div
            className='quadDetailsContentBlock'
            onClick={this.props.handleOnClose.bind(null)}>
          </div>
          <div className='quadDetailsContentBlock'></div>
          <div className='quadDetailsContentBlock'></div>
          <div className='quadDetailsContentBlock'></div>
          <div className='quadDetailsContentBlock'></div>
        </div>
    )
  }
}

QuadDetails.propTypes = {
  projectId: PropTypes.string.isRequired,
  scrollDirection: PropTypes.string.isRequired,
  handleOnClose: PropTypes.func.isRequired
}

QuadDetails.defaultProps = {
  scrollDirection: 'left'
}

module.exports = QuadDetails;
