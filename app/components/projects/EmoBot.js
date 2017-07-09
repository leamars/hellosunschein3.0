import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectHeader from '../ProjectHeader';

const paragraph = {
  color: '#000',
  marginTop: 20,
  fontWeight: 100,
  fontSize: 18
}
const content = {
  textAlign: 'center'
}
const styles = {
  paragraph: Object.assign(paragraph, content),
  content: content
}

class EmoBot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProjectHeader title="EmoBot"></ProjectHeader>
        <div style={styles.content}>
          <p style={styles.paragraph}>A tiny bot with an 8x8 matrix for a face that shows different emojis when you shake it!
          </p>
          //<img src={require('file-loader!./imgs/emoBotHeader.png')} />
        </div>
      </div>
    )
  }
}

module.exports = EmoBot;
