import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const paragraph = {
  color: '#000'
}

const title = {
  fontSize: 45,
  textDecoration: 'underline'
}

const date = {
  marginTop: 10
}
const location = {
  marginTop: 10
}
const links = {
  marginTop: 10
}

const styles = {
  title: Object.assign(title, paragraph),
  date: Object.assign(paragraph, date),
  location: Object.assign(paragraph, location),
  links: Object.assign(paragraph, links),
}

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p style={styles.title}>{this.props.title}</p>
        <p style={styles.date}>{this.props.location}, {this.props.date}</p>
      </div>
    )
  }
}

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

ProjectHeader.defaultProps = {
  title: "EmoBot",
  date: "July 2017",
  location: "@ITP, NYU"
}

module.exports = ProjectHeader;
