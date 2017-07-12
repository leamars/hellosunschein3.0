import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ProjectHeader from '../ProjectHeader';
import ProjectStyles from './ProjectStyles';

class GrinnellAppDev extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={ProjectStyles.display}>
        <div style={ProjectStyles.row}>
          <ProjectHeader
            project={this.props.project}
          ></ProjectHeader>
        </div>
      </div>
    )
  }
}

GrinnellAppDev.propTypes = {
  project: PropTypes.object.isRequired
}

module.exports = GrinnellAppDev;
