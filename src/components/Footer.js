import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/MailOutline';
import LocationIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
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
      '& svg, span': {
        color: '#fff'
      }
    }
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: BLUE_GREY,
    '& h2': {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '4em',
      letterSpacing: '.2rem'
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
    '& svg': {
      fontSize: '4rem'
    },
    '& svg, span': {
      color: LIGHT_BLUE
    },
    '& a': {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      '& svg': {
        fontSize: '2.5rem'
      }
    }
  },
  social: {
    backgroundColor: '#0f1726',
    width: '100%',
    height: 120,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 80
    }
  },
  name: {
    paddingLeft: theme.spacing(4),
    color: BLUE_GREY,
    '& svg': {
      color: LIGHT_BLUE
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      '& h6': {
        fontSize: '.7rem'
      },
      '& svg': {
        fontSize: '.8rem'
      }
    }
  },
  socialIcons: {
    paddingRight: theme.spacing(4),
    '& svg': {
      fontSize: '1.5em',
      color: BLUE_GREY
    },
    '& svg:hover': {
      color: LIGHT_BLUE
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(1),
      '& button': {
        padding: theme.spacing(1)
      },
      '& svg': {
        fontSize: '1.2rem'
      }
    }
  }
}));

export default function About() {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const handleIsVisible = isVisible => {
    if (!visible && isVisible) {
      setVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={handleIsVisible}>
      <div id='contact' className={classes.root}>
        <div className={classes.topShapeDiv}></div>
        <div className={classes.contact}>
          <div className={classes.title}>
            <Fade in={visible} timeout={1000} style={{ transitionDelay: 500 }}>
              <Typography variant='h2' align='center'>
                Say hi!
              </Typography>
            </Fade>
          </div>
          <div className={classes.email}>
            <a href='mailto:bsinaiko@gmail.com' target='_blank' rel='noopener noreferrer'>
              <IconButton>
                <MailIcon />
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
                <LocationIcon />
              </span>{' '}
              Chicago
            </Typography>
          </div>
          <div className={classes.socialIcons}>
            <IconButton target='_blank' href='https://www.linkedin.com/in/benjaminsinaiko/'>
              <LinkedInIcon />
            </IconButton>
            <IconButton target='_blank' href='https://github.com/benjaminsinaiko/'>
              <GithubIcon />
            </IconButton>
            <IconButton target='_blank' href='https://twitter.com/huckabeej/'>
              <TwitterIcon />
            </IconButton>
            <IconButton target='_blank' href='https://www.facebook.com/bsinaiko/'>
              <FacebookIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
}
