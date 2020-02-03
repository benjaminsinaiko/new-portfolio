import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blueGray from '@material-ui/core/colors/blueGrey';

const LIGHT_BLUE = lightBlue[400];
const BLUE_GREY = blueGray[500];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#282c34',
    color: '#fff',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 300
    }
  },
  topShapeDiv: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: '0px 0px 50% 50%',
    [theme.breakpoints.down('xs')]: {
      height: 50
    }
  },
  contact: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    '& div:hover': {
      '& i, span': {
        color: '#fff'
      }
    }
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: BLUE_GREY,
    '& h2': {
      fontSize: '4em'
    },
    [theme.breakpoints.down('xs')]: {
      '& h2': {
        fontSize: '3.5em'
      }
    }
  },
  email: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& i': {
      fontSize: '4rem'
    },
    '& i, span': {
      color: LIGHT_BLUE
    },
    '& a': {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      '& i': {
        fontSize: '2.5rem'
      }
    }
  },
  social: {
    backgroundColor: '#0f1726',
    width: '100%',
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    paddingLeft: theme.spacing(4),
    color: BLUE_GREY,
    '& i': {
      color: LIGHT_BLUE
    },
    '& span': {
      margin: theme.spacing(0.5)
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      '& h6': {
        fontSize: '.7rem'
      },
      '& i': {
        fontSize: '.8rem'
      }
    }
  },
  socialIcons: {
    paddingRight: theme.spacing(4),
    '& i': {
      fontSize: '1.5em',
      color: BLUE_GREY
    },
    '& i:hover': {
      color: LIGHT_BLUE
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(1),
      '& button': {
        padding: theme.spacing(1)
      },
      '& i': {
        fontSize: '1.2rem'
      }
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topShapeDiv}></div>
      <div className={classes.contact}>
        <div className={classes.title}>
          <Typography variant='h2' align='center'>
            Say hi!
          </Typography>
        </div>
        <div className={classes.email}>
          <a href='mailto:bsinaiko@gmail.com' target='_blank' rel='noopener noreferrer'>
            <IconButton>
              <i className='far fa-envelope'></i>
            </IconButton>
            <Button>bsinaiko@gmail.com</Button>
          </a>
        </div>
      </div>

      <div className={classes.social}>
        <div className={classes.name}>
          <Typography variant='subtitle2'>
            Benjamin Sinaiko{' '}
            <span>
              <i className='fas fa-map-marker-alt'></i>
            </span>{' '}
            Chicago
          </Typography>
        </div>
        <div className={classes.socialIcons}>
          <IconButton target='_blank' href='https://www.linkedin.com/in/benjaminsinaiko/'>
            <i className='fab fa-linkedin'></i>
          </IconButton>
          <IconButton target='_blank' href='https://github.com/benjaminsinaiko/'>
            <i className='fab fa-github'></i>
          </IconButton>
          <IconButton target='_blank' href='https://twitter.com/huckabeej/'>
            <i className='fab fa-twitter-square'></i>
          </IconButton>
          <IconButton target='_blank' href='https://www.facebook.com/bsinaiko/'>
            <i className='fab fa-facebook'></i>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
