import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';

import avatarPhoto from '../img/benjamin.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),
    minHeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  avatar: {
    width: 175,
    height: 175,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
      width: 125,
      height: 125
    }
  },
  about: {
    width: '50%',
    justifyContent: 'center',
    '& h4': {
      color: blueGrey[500]
    },
    '& h6': {
      textAlign: 'justify',
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      '& h6': {
        fontSize: '1rem'
      }
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <div>
        <Avatar
          alt="Benjamin Sinaiko"
          src={avatarPhoto}
          className={classes.avatar}
        />
      </div>
      <div className={classes.about}>
        <Typography variant="h4" gutterBottom>
          A little about me
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          I’m a software developer, entrepreneur, and serial concertgoer. I’ve
          founded Ven.u, an app to help my fellow Chicagoans find everything
          they need to know about the best upcoming concerts in the area. I’m
          looking to help the next business up its performance by tackling its
          technological and software challenges.
        </Typography>
      </div>
    </div>
  );
}
