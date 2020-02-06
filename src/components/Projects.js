import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import blueGrey from '@material-ui/core/colors/blueGrey';

import projectsData from '../data/projectsData';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: blueGrey[500],
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23282c34' fill-opacity='0.3'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
    paddingTop: 64,
    paddingBottom: 64,
    minHeight: 750,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    '& hr': {
      backgroundColor: '#fff',
      margin: '0 30%',
      height: 3
    }
  },
  headerTitle: {
    color: '#fff'
  },
  projectList: {
    margin: theme.spacing(4),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  cardRoot: {
    positoin: 'relative',
    maxWidth: 345,
    margin: theme.spacing(1),
    '&:hover $overlay': {
      opacity: 1
    },
    '&:hover $cardMedia': {
      opacity: 0.1
    },
    '&:hover $contentTitle': {
      opacity: 0
    }
  },
  cardMedia: {
    height: 275,
    opacity: 1,
    backgroundSize: 'contain'
  },
  contentTitle: {
    fontSize: '2.125rem',
    fontWeight: 'bold',
    color: blueGrey[800],
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  contentText: {
    color: blueGrey[700],
    height: 60,
    '& p': {
      paddingBottom: 0
    },
    '& span': {
      fontWeight: 500
    }
  },
  actionLinks: {
    positon: 'absolute',
    bottom: 0,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  overlay: {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
    transition: '.5s ease'
  },
  overlayContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& $overlayText, $overlayPackages': {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  },
  overlayTitle: {
    height: '15%',
    paddingTop: theme.spacing(2),
    color: blueGrey[800],
    fontWeight: 'bold'
  },
  overlayText: {
    height: '40%',
    '& p': {
      fontWeight: 600
    }
  },
  overlayPackages: {
    height: '45%',
    alignSelf: 'flex-start',
    '& ul, li': {
      padding: 0
    },
    '& li': {
      fontWeight: 500
    }
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div id='projects' className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h3' className={classes.headerTitle} gutterBottom>
          Recent Projects
        </Typography>
        <Divider />
      </div>
      <div className={classes.projectList}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  projectName,
  projectImg,
  projectDescription,
  techUsed,
  techDescription,
  packages,
  siteLink,
  repoLink
}) {
  const classes = useStyles();

  return (
    <Card className={classes.cardRoot}>
      <CardContent style={{ position: 'relative' }}>
        <CardMedia
          className={classes.cardMedia}
          image={projectImg}
          title={`${projectName} mockup`}
        />

        <div className={classes.overlay}>
          <div className={classes.overlayContainer}>
            <Typography variant='h4' className={classes.overlayTitle}>
              {projectName}
            </Typography>
            <div className={classes.overlayText}>
              <Typography color='secondary' align='center' gutterBottom>
                {techUsed}
              </Typography>
              <Typography variant='body1' color='secondary'>
                {techDescription}
              </Typography>
            </div>
            <div className={classes.overlayPackages}>
              <Typography variant='subtitle2'>Packages used: </Typography>
              <List dense>
                {packages.length &&
                  packages.map(packageName => (
                    <ListItem key={packageName}>
                      <Typography variant='caption'>{packageName}</Typography>
                    </ListItem>
                  ))}
              </List>
            </div>
          </div>
        </div>
        <Typography className={classes.contentTitle} variant='h5' component='h2'>
          {projectName}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant='body2' className={classes.contentText}>
          <span>{projectName} </span> {projectDescription}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionLinks}>
        <Button color='primary' href={siteLink} target='_blank' startIcon={<OpenInBrowserIcon />}>
          Live Site
        </Button>
        <Button color='primary' href={repoLink} target='_blank' startIcon={<GitHubIcon />}>
          Code Repo
        </Button>
      </CardActions>
    </Card>
  );
}
