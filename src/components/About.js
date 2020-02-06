import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AffilateIcon from '@material-ui/icons/GroupWork';
import blueGrey from '@material-ui/core/colors/blueGrey';

import avatarPhoto from '../img/benjamin.jpg';
import mercuriaLogo from '../img/aboutLogos/mercuriaLogo.jpg';
import venuLogo from '../img/aboutLogos/venuLogo.png';
import actualizeLogo from '../img/aboutLogos/actualizeLogo.jpg';
import depaulLogo from '../img/aboutLogos/depaulLogo.jpg';
import logo2112 from '../img/aboutLogos/2112Logo.jpg';
import logo1871 from '../img/aboutLogos/1871Logo.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingTop: 78,
    minHeight: 900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  aboutMe: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '90%'
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
    paddingTop: theme.spacing(2),
    width: '50%',
    justifyContent: 'center',
    '& h4': {
      color: blueGrey[500]
    },
    '& h5': {
      textAlign: 'justify',
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      '& h5': {
        fontSize: '1.15rem'
      }
    }
  },
  iconList: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '100%',
    display: 'flex',
    '& $work, & $education, & $affiliated': {
      width: '33%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& svg': {
        color: blueGrey[500],
        fontSize: '4rem'
      },
      '& span': {
        color: blueGrey[500],
        marginBottom: theme.spacing(2)
      }
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& $work, & $education, & $affiliated': {
        width: '100%',
        marginBottom: theme.spacing(3),
        '& ul': {
          width: '100%',
          alignSelf: 'flex-start'
        }
      }
    }
  },
  work: {},
  education: {},
  affiliated: {}
}));

export default function About() {
  const classes = useStyles();

  return (
    <div id='about' className={classes.root}>
      <div className={classes.aboutMe}>
        <Avatar alt='Benjamin Sinaiko' src={avatarPhoto} className={classes.avatar} />
        <div className={classes.about}>
          <Typography variant='h4' gutterBottom>
            A little about me
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            I’m a software developer, entrepreneur, and serial concertgoer. I’ve founded Ven.u, an
            app to help my fellow Chicagoans find everything they need to know about the best
            upcoming concerts in the area. I’m looking to help the next business up its performance
            by tackling its technological and software challenges.
          </Typography>
        </div>
      </div>
      <div className={classes.iconList}>
        <div className={classes.work}>
          <WorkIcon />
          <Typography variant='caption'>Work Experience</Typography>
          <List dense>
            <IconListItem
              logo={venuLogo}
              primary='Ven.u - Live Music App'
              secondary='Founder'
              link='http://www.getvenu.com/'
            />
            <IconListItem
              logo={mercuriaLogo}
              primary='Mercuria Energy'
              secondary='Operations & Logistics'
              link='http://mercuria.com/'
            />
          </List>
        </div>
        <div className={classes.education}>
          <SchoolIcon />
          <Typography variant='caption'>Education</Typography>
          <List dense>
            <IconListItem
              logo={actualizeLogo}
              primary='Actualize Coding Bootcamp'
              secondary='Full Stack Web Development'
              link='https://anyonecanlearntocode.com/'
            />
            <IconListItem
              logo={depaulLogo}
              primary='DePaul University'
              secondary='MBA - Finance | BS - Marketing'
              link='https://www.depaul.edu/'
            />
          </List>
        </div>
        <div className={classes.affiliated}>
          <AffilateIcon />
          <Typography variant='caption'>Past Affiliations</Typography>
          <List dense>
            <IconListItem
              logo={logo2112}
              primary='2112 Chicago - Member'
              secondary='Music, Film, Tech Incubator'
              link='https://2112inc.com/'
            />
            <IconListItem
              logo={logo1871}
              primary='1871 Chicago - Member'
              secondary='Technology & Entrepreneurship Center'
              link='https://1871.com/'
            />
          </List>
        </div>
      </div>
    </div>
  );
}

function IconListItem({ logo, primary, secondary, link }) {
  return (
    <ListItem button component='a' href={link} target='_blank'>
      <ListItemAvatar>
        <Avatar>
          <Avatar alt='company logo' src={logo} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
}
