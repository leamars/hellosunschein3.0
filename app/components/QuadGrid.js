import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Quad from './Quad';

class QuadGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowDetails: false,
      selectedQuad: null
    }

    //this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails(quad) {
    this.setState({shouldShowDetails: true, selectedQuad: quad});
    this.props.handleOnOpen();
  }

  render() {

    return (
      <div className='projectMasonry'>
        {this.props.projects.map((project, index) => {
          console.log(JSON.stringify(project))
          return (
            <Link to={`/projects/${project.name}`}>

              <Quad
                className='quad'
                key={index}
                color={project.color}
                name={project.name}
                img= {project.img}

              />
            </Link>
          )
        })}
      </div>
    )
  }
}

QuadGrid.propTypes = {
  projects: PropTypes.array.isRequired,
  handleOnOpen: PropTypes.func.isRequired
}

module.exports = QuadGrid;
