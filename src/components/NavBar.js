import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import blueGray from '@material-ui/core/colors/blueGrey';

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
      color: blueGray[500]
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
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

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <img src={initialsImg} alt='' />
            </IconButton>
            <Typography href='#header' component='a' variant='h6' className={classes.title}>
              Benjamin Sinaiko
            </Typography>
          </div>

          <div className={classes.sections}>
            <Typography href='#about' component='a' variant='h6' className={classes.links}>
              About
            </Typography>
            <Typography href='#contact' component='a' variant='h6' className={classes.links}>
              Projects
            </Typography>
            <Typography href='#contact' component='a' variant='h6' className={classes.links}>
              Contact
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
