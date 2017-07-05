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

  render() {
    var projectId = this.props.projectId
    var projectFull = ProjectAPI.get(projectId); // Grab project from API
    return (
        <div
          className='quadDetailsContainer'
          style={{
            borderColor: this.props.color,
            backgroundColor: this.props.color
          }}
          onClick={this.props.handleOnClose.bind(null)}
        >
          <p>{this.props.title}</p>
          <Link
            to={`/`}
          >
            <img src={this.props.img} />
          </Link>
        </div>
    )
  }
}

QuadDetails.propTypes = {
  projectId: PropTypes.string.isRequired,
  scrollDirection: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleOnClose: PropTypes.func.isRequired
}

QuadDetails.defaultProps = {
  scrollDirection: 'left'
}

module.exports = QuadDetails;
