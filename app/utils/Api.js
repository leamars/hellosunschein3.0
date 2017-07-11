//import Axios from 'axios';
import React, { Component } from 'react';
import EmoBot from '../components/projects/EmoBot'
import LightTrix from '../components/projects/LightTrix'

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

var imgs = [
  'https://cdn.dribbble.com/users/375673/screenshots/2724647/preseventlogo.png',
  'https://cdn.dribbble.com/users/375673/screenshots/2928618/flaggif3.gif',
  'https://cdn.dribbble.com/users/375673/screenshots/2719741/appdev_logo.png',
  'https://cdn.dribbble.com/users/375673/screenshots/2724647/preseventlogo.png',
  'https://cdn.dribbble.com/users/375673/screenshots/2921631/ezgif.com-gif-maker-_3_.gif'
];

var pathNames = [
  "RantChant",
  "RWDevConfOnboarding",
  "TheUXSearch1",
  "TheUXSearch2",
  "FramerJS",
  "GeorgiaTypography",
  "ITPCamp",
  "GeorgiaTypography",
  "100DaysOfCodeArt"
];

const ProjectAPI = {
  projects: [
    {
      name: "emoBot",
      color: "#FDBB2C",
      img: 'dist/imgs/emoBot/emoBotHeader.png',
      date: "Jul 1, 2017",
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
        },
      ],
      render: <EmoBot />
    },
    {
      name: "lightTrix",
      color: "#FDBB2C",
      img: 'dist/imgs/lightTrix/lightTrixLea.gif',
      date: "Jul 1, 2017",
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
      ],
      render: <LightTrix />
    },
    {
      name: "rantAndChant",
      color: "#FDBB2C",
      img: 'dist/imgs/rantAndChant/rantAndChantLogo.png',
      date: "Jul 1, 2017",
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
      ],
      render: <EmoBot />
    },
    {
      name: "presevent",
      color: "#FDBB2C",
      img: 'dist/imgs/presevent/preseventLogo2.png',
      date: "Jul 1, 2017",
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
      ],
      render: <EmoBot />
    },
    {
      name: "appDev",
      color: "#FDBB2C",
      img: 'dist/imgs/appDev/appDevLogo.png',
      date: "Jul 1, 2017",
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
      ],
      render: <EmoBot />
    },
    {
      name: "colorblaind",
      color: "#FDBB2C",
      img: 'dist/imgs/colorblaind/colorblaindLogo.png',
      date: "Jul 1, 2017",
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
      ],
      render: <EmoBot />
    },
    {
      name: "pioneerWeekend",
      color: "#FDBB2C",
      img: 'dist/imgs/pioneerWeekend/pioneerWeekendLogo.png',
      date: "Jul 1, 2017",
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
      ],
      render: <EmoBot />
    }
  ],
  all: function() { return this.projects },
  get: function(projectId) {
    const isProject = p => p.name == projectId
    return this.projects.find(isProject)
  }
}

module.exports = ProjectAPI;
