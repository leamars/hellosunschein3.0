import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ProjectHeader from '../ProjectHeader';
import ProjectStyles from './ProjectStyles';

class EmoBot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={ProjectStyles.display}>
        <div style={ProjectStyles.row}>
          <ProjectHeader
            project={this.props.project}
          ></ProjectHeader>
        </div>

        <div style={ProjectStyles.row}>
          <div style={ProjectStyles.content}>
            <h3>What is EmoBot?</h3>
            <p style={ProjectStyles.paragraph}>EmoBot is a tiny bot with a playful interface that challenges users to mimic its expression by showing different faces on an 8x8 LED Matrix. If the user shows the right face EmoBot rewards them with a heart emoji and a success sound. And if they get it wrong... it shows a poop.
            </p>
            <img
              src='dist/imgs/emoBot/emoBotHeader.png'
              style={ProjectStyles.mediumImage} />
            <img
              src='dist/imgs/emoBot/emoBotFaces.png'
              style={ProjectStyles.mediumImage} />
            <p style={ProjectStyles.paragraph}>EmoBot is powered by a 9V battery and gets its smarts from an Arudino 101. Using the <em>analog gyroscope sensor</em> and the <em>BLE communication feature</em>, EmoBot changes its face when a user shakes it, and then wirelessly transmits that face to a custom iOS app through a BLE connection. The iOS app grabs the face from EmoBot, and then uses the front-facing (aka 'selfie') camera to detect the user's face and analyze their emotional characteristic using the <em>Affectiva SDK</em>. </p>

            {/* <iframe src="//slides.com/leamaroltsonnenschein/foodpantry/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            <iframe src="https://player.vimeo.com/video/224859950" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}

            <p style={ProjectStyles.paragraph}>
              If the user's face matches EmoBot's, the iOS app sends back a thumbs-up to EmoBot. EmoBot then rewards the user with a heart emoji and a satisfying success sound (borrowed from Super Mario Bros for its established phichological positivity trigger). If the user's face doesn't match... well, then EmoBot responds with a snarky poop emoji and a failure sound (also from Super Mario Bros, for its negative association). <br/><br/>

              After 3 successful trials, the user hears the 'level complete' sound indicating that the game is over and they've won. If the user fails 3 times, they hear the 'game over' sound. Anecdotally, that sound urges them to try again ;)
            </p>

            <img
              src='dist/imgs/emoBot/emoBotProcess.png'
              style={ProjectStyles.smallImage} />
            <img
              src='dist/imgs/emoBot//emoBotProcess3.png'
              style={ProjectStyles.smallImage} />
            <img
              src='dist/imgs/emoBot/emoBotProcess4.png'
              style={ProjectStyles.smallImage} />

            <h3>What's the point?</h3>
            <p style={ProjectStyles.paragraph}>I had three objectives when making EmoBot:</p>

            <ol>
              <li>1. Learn more about physical computing, and connected devices.</li>
              <li>2. Create something delightful</li>
              <li>3. Create something delightful </li>
            </ol>

            <h3>Convoluted Minimalism</h3>
            <p style={ProjectStyles.paragraph}>EmoBot was designed and developed with much love and affection, but also the thought that I wanted to make something super complex look and feel really simple, almost silly. That's what I like to do - I like minimizing the output, but maximizing the input to create a really stellar experience that delights and surprises.
            </p>

            <p style={ProjectStyles.paragraph}>I created and presented EmoBot during my time at <a href='itp.nyu.edu/camp2017/'>ITP Camp 2017</a>.</p>

            <img
              src='dist/imgs/emoBot/emoBotUser1.png'
              style={ProjectStyles.mediumImage} />
            <img
              src='dist/imgs/emoBot/emoBotUser2.png'
              style={ProjectStyles.mediumImage} />

            <img
              src='dist/imgs/emoBot/emoBotLeaHeart.JPG'
              style={ProjectStyles.mediumImage} />
            <img
              src='dist/imgs/emoBot/emoBotLeaPoop.JPG'
              style={ProjectStyles.mediumImage} />

            <p style={ProjectStyles.paragraph}>Below is the full range of 'faces' EmoBot is programmed to display (some clearly better than others - there's only so much you can do with an 8x8 matrix...).
            </p>
            <img
              src='dist/imgs/emoBot/emoBotAllFaces.png'
              style={ProjectStyles.bigImage} />
            <h3>Why poop, you ask? Well, two things really:</h3>
            <ol>
              <li>1. The shape of the poop emoji is almost the exact opposite of the heart emoji, so it makes for the perfect counterpart. Together they are in harmony.</li>
              <li>2. I wanted a whimsical emoji so that the diappointment wouldn't be too grave. At least people would get a laugh out of it.</li>
              <li>3. I'm personally just a big fan...</li>
            </ol>
            <img
              src='dist/imgs/emoBot/emoBotLeaPoop.png'
              style={ProjectStyles.smallImage} />
            <img
              src='dist/imgs/emoBot/emoBotLeaPoop2.png'
              style={ProjectStyles.smallImage} />
            <img
              src='dist/imgs/emoBot/emoBotLeaPoop3.png'
              style={ProjectStyles.smallImage} />
          </div>
        </div>
      </div>
    )
  }
}

// Either we get a projectID coming from the URL, OR we get the
EmoBot.propTypes = {
  project: PropTypes.object
}

module.exports = EmoBot;
