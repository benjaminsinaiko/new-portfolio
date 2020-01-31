import React, { useState, useEffect } from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';
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
  const [boxOn, setBoxOn] = useState(false);

  useEffect(() => {
    // setBoxOn(true)
    console.log('MOUNTED');
    return () => {
      console.log('UNMOUNTED');
    };
  });

  return (
    <div className={classes.root}>
      <HeaderBox boxOn={boxOn} />
      <div className={classes.introText}>
        <Typography variant='h1'>
          Hi, I'm <span>Benjamin</span>
        </Typography>
        <Typography variant='h4'>I like building web things</Typography>
      </div>
    </div>
  );
}

function HeaderBox({ boxOn }) {
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
      while (boxOn) {
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
        await next({ height: '50%', background: BIG_COLOR });
        await next({ top: '40%', height: '10%', background: SMALL_COLOR });
        await next({ width: '100%', background: BIG_COLOR });
        await next({ left: '90%', width: '10%', background: SMALL_COLOR });
        await next({ height: '60%', width: '10%', background: BIG_COLOR });
        await next({
          left: '90%',
          top: '90%',
          height: '10%',
          background: SMALL_COLOR
        });
      }
    },
    config: config.slow
  });
  return <animated.div style={{ ...props, position: 'absolute' }} />;
}
