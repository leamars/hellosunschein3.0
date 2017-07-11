import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectAPI from '../utils/Api';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// All the project components - all projects must be imported here!!!
import EmoBot from './projects/EmoBot';
import LightTrix from './projects/LightTrix';

class QuadDetails extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    //console.log("Context in Quad Details " + this.context.scrollFromTop);
  }

  componentDidMount() {

    if (this.props.location.paramToPass) {
      console.log("Got here through Quad Click");
    } else {
      console.log("Got here by entering URL");
    }

    // Workaround to scroll window to top when comopnent mounts
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }

  render() {

    var projectId = this.props.match.params.projectId
    var project = ProjectAPI.get(projectId); // Grab project from API

    var currentScrollTop = this.context.scrollFromTop;

    return (
        <div
          className='quadDetailsContainer'
          style={{
            //borderColor: projectFull.color,
            //backgroundColor: projectFull.color
            backgroundColor: 'white',
            borderColor: 'white'
          }}
        >
          <div className='quadDetails'
            style = {{
              //borderColor: 'white'
            }}>
            <Link to={{
            pathname: `/`,
              state: { modal: true }
            }}>
              <div className='closeButton'>x</div>
            </Link>

            {React.cloneElement(
              project.render,
              {project: project}
            )}
          </div>
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
