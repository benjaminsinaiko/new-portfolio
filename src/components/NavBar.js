import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import blueGray from '@material-ui/core/colors/blueGrey';

import scrollTo from '../utils/scrollTo';
import initialsImg from '../img/initialsImg.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: 0,
    flexGrow: 1,
    zIndex: 10,
    '& header': {
      backgroundColor: '#282c34'
    },
    '& a': {
      textDecoration: 'none',
      color: blueGray[500],
      cursor: 'pointer'
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  titleButton: {
    marginRight: theme.spacing(2)
  },
  titleName: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  sections: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '& a': {
      marginLeft: theme.spacing(6)
    },
    [theme.breakpoints.down('xs')]: {
      '& a': {
        fontSize: '1rem',
        marginLeft: theme.spacing(2)
      }
    }
  }
}));

const scrollToElement = el => () => {
  scrollTo(el);
};

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <div onClick={scrollToElement('#header')} className={classes.titleWrapper}>
            <IconButton
              component='a'
              edge='start'
              className={classes.titleButton}
              color='inherit'
              aria-label='menu'
            >
              <img src={initialsImg} alt='' />
            </IconButton>
            <Typography component='a' variant='h6' className={classes.titleName}>
              Benjamin Sinaiko
            </Typography>
          </div>

          <div className={classes.sections}>
            <Typography
              onClick={scrollToElement('#projects')}
              component='a'
              variant='h6'
              className={classes.links}
            >
              Projects
            </Typography>
            <Typography
              onClick={scrollToElement('#about')}
              component='a'
              variant='h6'
              className={classes.links}
            >
              About
            </Typography>
            <Typography
              onClick={scrollToElement('#contact')}
              component='a'
              variant='h6'
              className={classes.links}
            >
              Contact
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
