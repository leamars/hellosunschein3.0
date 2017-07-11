import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const paragraph = {
  color: '#000'
}

const title = {
  fontSize: 45,
  display: 'inbline-block',
  borderBottomStyle: 'solid',
  borderBottomColor: 'black',
  borderBottomSize: '20px'
}

const subTitle = {
  marginTop: 10
}
const links = {
  marginTop: 5
}

const resource = {
  marginTop: 20
}

const styles = {
  title: Object.assign(title, paragraph),
  subTitle: Object.assign(paragraph, subTitle),
  links: Object.assign(paragraph, links),
  resources: resource,
}

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p style={styles.title}>{this.props.project.name}</p>
        <p style={styles.subTitle}>{this.props.project.location}, {this.props.project.date}</p>
        <p style={styles.resources}>Resources</p>
        {this.props.project.links.map((link, index) => {
          return (
            <p style={styles.links}
              key={index}>
              <a target="_blank" href={link.url}>{link.title}</a>
            </p>
          )
        })
        }
      </div>
    )
  }
}

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired
}

ProjectHeader.defaultProps = {
  title: "EmoBot",
  date: "July 2017",
  location: "@ITP, NYU",
  links: [
    {
      title: "Github Repo",
      url: "https://github.com/leamars/EmoBot"
    },{
      title: "Affectiva SDK",
      url: "https://developer.affectiva.com/"
    },{
      title: "Arduino 101",
      url: "https://www.arduino.cc/en/Reference/CurieBLE"
    },{
      title: "BLE for iOS Resources",
      url: "https://www.raywenderlich.com/52080/introduction-core-bluetooth-building-heart-rate-monitor"
    }
  ]
}

module.exports = ProjectHeader;
