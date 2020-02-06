import colorsApp from '../img/projectImgs/myPalettes_mockup.jpg';
import fplTracker from '../img/projectImgs/fplTracker_mockup.jpg';
import weGrow from '../img/projectImgs/weGrow_mockup.jpg';

const projectsData = [
  {
    id: 1,
    projectName: 'FPL Tracker',
    projectImg: fplTracker,
    projectDescription:
      'is a dataViz companion app for the official Fantasy Premier League game. Keep up with your leagues, team, and players.',
    techUsed: 'React JS / Reach Router',
    techDescription:
      // 'React front-end, with context hooks for state management. Data from the unoffical FPL API.',
      'React with useContext hook for state management. Routing with Reach Router. Data from the unofficial FPL API.',
    packages: ['axios', 'http-proxy-middleware', 'material-ui', 'moment', 'nivo'],
    siteLink: 'https://fpl-tracker.netlify.com/',
    repoLink: 'https://github.com/benjaminsinaiko/fpl_tracker'
  },
  {
    id: 2,
    projectName: 'WeGrow',
    projectImg: weGrow,
    projectDescription:
      'is a plant watering scheduler app. Set and adjust schedules, by plant and days between waterings.',
    techUsed: 'React JS / Material-UI',
    techDescription:
      'React with context hooks for state management. Default plant Data seeded, users can adjust watering dates and times.',
    packages: ['material-ui/pickers', 'moment', 'react-big-calendar', 'uuid'],
    siteLink: 'https://we-grow.netlify.com/',
    repoLink: 'https://github.com/benjaminsinaiko/we-grow-in-tandem'
  },
  {
    id: 3,
    projectName: 'MyPalettes',
    projectImg: colorsApp,
    projectDescription:
      'is a Flat UI Colors clone. Use existing palettes or choose your own colors and save to new palettes.',
    techUsed: 'React JS / React Router',
    techDescription:
      'React front-end, with localStorage for persistent state. Default palettes seeded, users can add/remove palettes from browser state.',
    packages: [
      'array-move',
      'chroma-js',
      'material-ui',
      'rc-slider',
      'react-copy-to-clipboard',
      'react-transition-group'
    ],
    siteLink: 'https://mypalettes.netlify.com/',
    repoLink: 'https://github.com/benjaminsinaiko/colors-app'
  }
];

export default projectsData;
