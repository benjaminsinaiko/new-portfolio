import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import orange from '@material-ui/core/colors/orange';

import scrollTo from '../utils/scrollTo';
import particlesConfig from '../data/particlesConfig';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: '#282c34',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  particlesBackground: {
    width: '100%',
    height: '100%',
    zIndex: 5
  },
  introText: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    color: '#fff',
    '& h1': {
      fontSize: 'calc(2em + 3vw)'
    },
    '& h4': {
      fontSize: 'calc(1em + 1.25vw)',
      fontFamily: '"Open Sans", sans-serif'
    },
    '& span': {
      color: orange[600],
      fontWeight: 'bold',
      textShadow: '3px 3px 5px #50555e'
    }
  },
  arrowWrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '95%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    zIndex: 10,
    '& h6, svg': {
      color: orange[600] + 80,
      fontWeight: 'bold'
    }
  },
  arrowIcon: {
    fontSize: 'calc(2em + 1.25vw)',
    transform: 'rotate(90deg)'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div id='header' className={classes.root}>
      <Particles className={classes.particlesBackground} params={{ ...particlesConfig }} />
      <div className={classes.introText}>
        <Typography variant='h1'>
          Hi, I'm <span>Benjamin</span>
        </Typography>
        <Typography variant='h4'>I like building web things</Typography>
      </div>
      <div
        onClick={scrollTo('#projects')}
        className={classes.arrowWrapper}
        aria-label='Navigation to Projects'
      >
        <Typography variant='subtitle1'>Projects</Typography>
        <DoubleArrowIcon className={classes.arrowIcon} />
      </div>
    </div>
  );
}
