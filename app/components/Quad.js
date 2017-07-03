import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

class Quad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color,
      size: props.size,
      img: props.img,
      text: props.text
    }
  }

  componentDidMount() {
    var width = ReactDOM.findDOMNode(this).offsetWidth;
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.setState({height: width});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    console.log("updating dimensions");
    var width = ReactDOM.findDOMNode(this).offsetWidth;
    this.setState({height: width});
  }

  render() {
    console.log('Height: ' + this.state.height);
    return (
      <div className={this.props.className} style={{
        backgroundColor: this.props.color,
        height: this.state.height
      }}>
        <div>Hello!</div>
      </div>
    )
  }
}

Quad.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

Quad.defaultProps = {
  color: '#0e0e0e',
  size: 1,
  img: '',
  text: 'Lea!!'
}


function QuadGrid(props) {

  var childElements = props.quads.map((quad, index) => {
    var sizeStyle = quad % 2 ? 'quad bigQuad' : 'quad littleQuad';
    console.log(quad);
        return (
          <li>
            <Quad
              className={sizeStyle}
              key={index}
            />

          </li>
        )
      });

  return (

    <div className='projectMasonry'>
      {props.quads.map((quad, index) => {

        var sizeStyle = quad % 2 === 0 ? 'quad bigQuad' : 'quad littleQuad';
        var randomColor = getRandomColor();
        return (
          <Quad
            className={sizeStyle}
            key={index}
            color={randomColor}
            text={'' + index}
          />
          )
        })}
    </div>
  )
}

function getRandomColor() {
  var colors = [
    '#0377BD',
    '#309597',
    '#7646FF',
    '#13CF13',
    '#F73F51',
    '#FFC300',
    '#FF7E29',
  ]
  var numColors = colors.length-1;
  console.log(numColors);

  return colors[Math.floor(Math.random() * numColors)];
}

QuadGrid.propTypes = {
  quads: PropTypes.array.isRequired
}

module.exports = Quad;
module.exports = QuadGrid;
