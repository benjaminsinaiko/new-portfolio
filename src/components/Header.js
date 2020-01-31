import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import orange from '@material-ui/core/colors/orange';

const FULL_COLOR = orange[200];
const BIG_COLOR = orange[300];
const SMALL_COLOR = orange[900];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#282c34',
    height: '100vh',
    paddingLeft: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  box: {
    position: 'absolute',
    zIndex: 0
  },
  introText: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    color: '#fff',
    zIndex: 1,
    '& h1': {
      fontSize: 'calc(2em + 3vw)'
    },
    '& h4': {
      fontSize: 'calc(1em + 2vw)'
    },
    '& span': {
      color: orange[600],
      fontWeight: 'bold'
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BoxAnimation />
      <div className={classes.introText}>
        <Typography variant='h1'>
          Hi, I'm <span>Benjamin</span>
        </Typography>
        <Typography variant='h4'>I like building web things</Typography>
      </div>
    </div>
  );
}

function BoxAnimation() {
  const props = useSpring({
    from: {
      left: '0%',
      top: '0%',
      width: '0%',
      height: '0%',
      background: FULL_COLOR,
      opacity: 0.4
    },
    to: async next => {
      await next({
        left: '0%',
        top: '0%',
        width: '100%',
        height: '100%',
        background: FULL_COLOR
      });
      await next({
        left: '90%',
        top: '90%',
        height: '10%',
        background: SMALL_COLOR
      });
      await next({ left: '0%', width: '100%', background: BIG_COLOR });
      await next({ width: '10%', background: SMALL_COLOR });
      await next({ top: '50%', height: '50%', background: BIG_COLOR });
      await next({ height: '10%', background: SMALL_COLOR });
      await next({ width: '100%', background: BIG_COLOR });
      await next({ left: '90%', width: '10%', background: SMALL_COLOR });
      await next({ top: '0%', height: '60%', background: BIG_COLOR });
      await next({ height: '10%', background: SMALL_COLOR });
      await next({ left: '0%', width: '100%', background: BIG_COLOR });
      await next({ width: '10%', background: SMALL_COLOR });
      await next({ height: '55%', background: BIG_COLOR });
      await next({ top: '45%', height: '10%', background: SMALL_COLOR });
      await next({ width: '55%', background: BIG_COLOR });
      await next({ left: '45%', width: '10%', background: SMALL_COLOR });
      await next({ left: '50%', top: '50%', width: '0%', height: '0%', background: FULL_COLOR });
    },
    config: config.slow
  });
  return <animated.div style={{ ...props, position: 'absolute' }} />;
}
