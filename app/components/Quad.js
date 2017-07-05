import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Quad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0,
      hover: false
    }
  }

  componentDidMount() {
    var width = ReactDOM.findDOMNode(this).offsetWidth;
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.setState({height: width/4*3});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    console.log("updating dimensions");
    var width = ReactDOM.findDOMNode(this).offsetWidth;
    this.setState({height: width/4*3});
  }

  toggleHover(isHovered) {
    this.setState({hover: isHovered});
  }

  render() {
    var borderColor = this.props.color;
    if (!this.state.hover) {
      borderColor = '#000000';
    }

    return (
      <Link
        to={`/projects/${this.props.name}`}
      >
        <div
          // This 'handleOnClick' passes the whole quad to the parent
          onClick={this.props.handleOnClick.bind(null, this)}
          className={this.props.className}
          style={{
            height: this.state.height,
            borderColor: borderColor
          }}
          onMouseEnter={this.toggleHover.bind(this, true)}
          onMouseLeave={this.toggleHover.bind(this, false)}>
          <div
            className="quadContent">
            <img src= {this.props.img} />
          </div>
        </div>
      </Link>
    )
  }
}

Quad.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired
}

Quad.defaultProps = {
  color: '#0e0e0e',
  size: 1,
  img: '',
  text: 'Lea!!'
}

module.exports = Quad;
