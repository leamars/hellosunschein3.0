//import Axios from 'axios';
import React, { Component } from 'react';
import EmoBot from '../components/projects/EmoBot'
import LightTrix from '../components/projects/LightTrix'
import PioneerWeekend from '../components/projects/PioneerWeekend'
import CodeArt from '../components/projects/CodeArt'
import Colorblaind from '../components/projects/Colorblaind'
import DeltaNYC from '../components/projects/DeltaNYC'
import Doodle from '../components/projects/Doodle'
import GrinnellAppDev from '../components/projects/GrinnellAppDev'
import GrinnellMAP from '../components/projects/GrinnellMAP'
import iOSApps from '../components/projects/iOSApps'
import LightItUp from '../components/projects/LightItUp'
import MixedMedia from '../components/projects/MixedMedia'
import Presevent from '../components/projects/Presevent'
import ProjectStyles from '../components/projects/ProjectStyles'
import RantAndChant from '../components/projects/RantAndChant'
import RTRControlCenter from '../components/projects/RTRControlCenter'
import RTRDeeplinking from '../components/projects/RTRDeeplinking'
import RTRUnlimited from '../components/projects/RTRUnlimited'
import RWenderlich from '../components/projects/RWenderlich'
import Typography from '../components/projects/Typography'
import Workshops from '../components/projects/Workshops'

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

// GHC Poster - https://ghc.anitaborg.org/2014-posters/

// https://forums.appleinsider.com/discussion/180524/apples-200-student-wwdc-attendees-super-excited-about-the-future-of-tech

const ProjectAPI = {
  projects: [
    {
      id: "emoBot",
      name: "EmoBot",
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
      id: "lightTrix",
      name: "LightTrix",
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
      id: "rantAndChant",
      name: "Rant & Chant",
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
      id: "presevent",
      name: "Presevent",
      color: "#FDBB2C",
      img: 'dist/imgs/presevent/preseventLogo2.png',
      date: "Jul 1, 2017",
      location: "@ITP, NYU",
      links: [
        {
          title: "Article about Presevent",
          url: "http://pioneerapplications.com/blog/2015/09/15/an-interview-with-the-ceo-co-founder-of-presevent/"
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
      id: "appDev",
      name: "Grinnell AppDev",
      color: "#FDBB2C",
      img: 'dist/imgs/appDev/appDevLogo.png',
      date: "Jul 1, 2017",
      location: "@ITP, NYU",
      links: [
        {
          title: "Global Students, Mobile Apps",
          url: "http://www.grinnell.edu/news/global-students-mobile-apps"
        },{
          title: "Grinnell AppDev @Mhacks",
          url: "https://www.facebook.com/MHacksHackathon/photos/a.124621211031651.25621.124349814392124/247860102041094/?type=3&theater"
        },{
          title: "Grinnell AppDev as Constitutionalized in CS",
          url: "https://www.grinnell.edu/academics/areas/computer-science/opportunities"
        },{
          title: "Github",
          url: "https://www.grinnell.edu/academics/areas/computer-science/opportunities"
        },{
          title: "Grinwell Challenge",
          url: "http://www.thesandb.com/news/grinwell-challenge-begins-app-launched.html"
        },{
          title: "Grinnell DB",
          url: "http://www.thesandb.com/news/mobile-directory-app-now-operational.html"
        },{
          title: "AppDev Starts",
          url: "http://www.thesandb.com/features/team-that-brought-you-g-licious-is-developing-new-apps.html"
        }
      ],
      render: <EmoBot />
    },
    {
      id: "colorblaind",
      name: "ColorblAInd",
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
      id: "pioneerWeekend",
      name: "Pioneer Weekend",
      color: "#FDBB2C",
      img: 'dist/imgs/pioneerWeekend/pioneerWeekendLogo.png',
      date: "Apr 8, 2014",
      location: "@Grinnell College, IA",
      links: [
        {
          title: "First Iteration (2014)",
          url: "http://pioneerweekend.strikingly.com/"
        },{
          title: "Pioneer Weekend 2.0",
          url: "https://www.grinnell.edu/news/pioneer-weekend-20-three-day-innovation-competition"
        },{
          title: "Pioneer Weekend 3.0 (and beyond)",
          url: "http://www.pioneer-weekend.com/"
        },{
          title: "Adopted as a yearly Wilson Center event",
          url: "https://www.grinnell.edu/academics/centers/wilson/events/pioneer-weekend"
        },{
          title: "The Wilson Center",
          url: "https://www.grinnell.edu/academics/centers/wilson"
        },{
          title: "Pioneer weekend first interview",
          url: "http://www.thesandb.com/news/pioneering-entrepreneurship.html"
        }

      ],
      render: <PioneerWeekend />
    },
    {
      id: "mica",
      name: "MICA",
      color: "#FDBB2C",
      img: 'dist/imgs/pioneerWeekend/pioneerWeekendLogo.png',
      date: "Apr 8, 2014",
      location: "@Grinnell College, IA",
      links: [
        {
          title: "Food Article in s&b",
          url: "http://www.thesandb.com/article/fighting-food-insecurity-in-grinnell.html"
        },{
          title: "Pioneer Weekend 2.0",
          url: "https://www.grinnell.edu/news/pioneer-weekend-20-three-day-innovation-competition"
        },{
          title: "Pioneer Weekend 3.0 (and beyond)",
          url: "http://www.pioneer-weekend.com/"
        },{
          title: "Adopted as a yearly Wilson Center event",
          url: "https://www.grinnell.edu/academics/centers/wilson/events/pioneer-weekend"
        },{
          title: "The Wilson Center",
          url: "https://www.grinnell.edu/academics/centers/wilson"
        }
      ],
      render: <EmoBot />
    }
  ],
  all: function() { return this.projects },
  get: function(projectId) {
    const isProject = p => p.id == projectId
    return this.projects.find(isProject)
  }
}

module.exports = ProjectAPI;
