import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Quad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color,
      size: props.size,
      img: props.img,
      text: props.text,
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

  render() {
    return (
      <div
        // This 'handleOnClick' passes the whole quad to the parent
        onClick={this.props.handleOnClick.bind(null, this)}
        className={this.props.className}
        style={{
          backgroundColor: "#FFFFFF",
          height: this.state.height
        }}>
        <div
          className="quadContent">
          <img src= {this.props.img} />
        </div>
      </div>
    )
  }
}

Quad.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired
}

Quad.defaultProps = {
  color: '#0e0e0e',
  size: 1,
  img: '',
  text: 'Lea!!'
}

class QuadDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='quadDetailsContainer'>DETAILS!
      </div>
    )
  }
}

class QuadGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowDetails: false,
      selectedQuad: null
    }

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails(quad) {
    console.log("hello!");
    console.log(quad.props.color);
    this.setState({shouldShowDetails: true, selectedQuad: quad});
  }

  render() {
    var randomColor = getRandomColor();
    var imgs = [
      'https://cdn.dribbble.com/users/375673/screenshots/3026449/georgiadribbble2.png',
      'https://cdn.dribbble.com/users/375673/screenshots/2925139/dribblefinal.gif',
      'https://cdn.dribbble.com/users/375673/screenshots/2921639/businesscardsdribble.png',
      'https://cdn.dribbble.com/users/375673/screenshots/2913311/typo800x400.png',
      'https://cdn.dribbble.com/users/375673/screenshots/2911380/paintsignrightdimensions.png',
      'https://cdn.dribbble.com/users/375673/screenshots/2928618/flaggif3.gif',
      'https://cdn.dribbble.com/users/375673/screenshots/2719741/appdev_logo.png',
      'https://cdn.dribbble.com/users/375673/screenshots/2724647/preseventlogo.png',
      'https://cdn.dribbble.com/users/375673/screenshots/2921631/ezgif.com-gif-maker-_3_.gif'
    ];
    var numImgs = imgs.length;
    var randomImg = imgs[Math.floor(Math.random() * numImgs)];

    console.log("Are we supposed to show details..." + this.state.shouldShowDetails);
    
    return (
      <div className='projectMasonry'>
        {this.props.quads.map((quad, index) => {

          var sizeStyle = quad % 2 === 0 ? 'quad bigQuad' : 'quad littleQuad';

          return (
            <Quad
              className={sizeStyle}
              key={index}
              color={randomColor}
              text={'' + index}
              img= {randomImg}
              handleOnClick= {this.toggleDetails}
            />
          )
        })}
      </div>
    )
  }
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

  return colors[Math.floor(Math.random() * numColors)];
}

QuadGrid.propTypes = {
  quads: PropTypes.array.isRequired,
}

module.exports = Quad;
module.exports = QuadDetails;
module.exports = QuadGrid;
