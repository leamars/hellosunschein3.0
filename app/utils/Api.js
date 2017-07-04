//import Axios from 'axios';

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
      color: getRandomColor(),
      img: imgs[0],
      name: pathNames[0]
    },
    {
      color: getRandomColor(),
      img: imgs[1],
      name: pathNames[1]
    },
    {
      color: getRandomColor(),
      img: imgs[2],
      name: pathNames[2]
    },
    {
      color: getRandomColor(),
      img: imgs[3],
      name: pathNames[3]
    },
    {
      color: getRandomColor(),
      img: imgs[4],
      name: pathNames[4]
    },
    {
      color: getRandomColor(),
      img: imgs[5],
      name: pathNames[5]
    },
    {
      color: getRandomColor(),
      img: imgs[0],
      name: pathNames[0]
    },
    {
      color: getRandomColor(),
      img: imgs[1],
      name: pathNames[1]
    },
    {
      color: getRandomColor(),
      img: imgs[2],
      name: pathNames[2]
    },
    {
      color: getRandomColor(),
      img: imgs[3],
      name: pathNames[3]
    },
    {
      color: getRandomColor(),
      img: imgs[4],
      name: pathNames[4]
    },
    {
      color: getRandomColor(),
      img: imgs[5],
      name: pathNames[5]
    }
  ],
  all: function() { return this.projects },
  get: function(projectId) {
    const isProject = p => p.name == projectId
    return this.projects.find(isProject)
  }
}

module.exports = ProjectAPI;
