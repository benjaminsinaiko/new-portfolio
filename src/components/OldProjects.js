import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import blueGrey from '@material-ui/core/colors/blueGrey';

import colorsApp from '../img/projectImgs/colorsApp.jpg';
import fplTracker from '../img/projectImgs/fplTracker.jpg';
import weGrow from '../img/projectImgs/weGrow.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: blueGrey[500],
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23282c34' fill-opacity='0.3'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
    paddingTop: 64,
    paddingBottom: 64,
    minHeight: 500,
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
  cardHeader: {
    paddingBottom: 0
  },
  cards: {
    margin: theme.spacing(4),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardRoot: {
    maxWidth: 345
  },
  cardMedia: {
    height: 240
  },
  modalRoot: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Projects() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const cards = Array.from({ length: 5 }, (v, i) => i);
  console.log(cards);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div id='projects' className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h3' className={classes.headerTitle} gutterBottom>
          Recent Projects
        </Typography>
        <Divider />
      </div>
      <div className={classes.cards}>
        {/* <ProjectCard open={handleOpen} close={handleClose} /> */}
        <AnimatedCard>
          {/* {cards} */}
          <ProjectCard />
        </AnimatedCard>
      </div>

      {/* <DialogView isOpen={isOpen} close={handleClose} /> */}
    </div>
  );
}

// const items = Array.from(4)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

function AnimatedCard(props) {
  console.log(props.children);

  const items = Array.from({ length: 3 }, (v, i) => i);
  const { radians } = useSpring({
    to: async next => {
      while (0) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true
  });
  return items.map(i => (
    <animated.div
      key={i}
      className='script-bf-box'
      style={{ transform: radians.interpolate(interp(i)) }}
    >
      {props.children}
    </animated.div>
  ));
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function AnimateCard(cardProps) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 100, friction: 40 }
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {cardProps.children}
    </animated.div>
  );
}

function ProjectCard({ open, close }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <Card className={classes.cardRoot}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardActionArea onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <CardMedia className={classes.cardMedia} image={fplTracker} title='app image' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            FPL Tracker
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            <span>FPL Tracker</span> is a data visualizer companion app for the official Fantasy
            Premier League game.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' startIcon={<DeleteIcon />}>
          Share
        </Button>
        <Button size='small' color='primary' startIcon={<DeleteIcon />} onClick={open}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function DialogView({ isOpen, close }) {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={close}>
      <Card className={classes.modalRoot}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='FPL Tracker'
          subheader='September 14, 2016'
        />
        <CardMedia
          className={classes.media}
          image='/static/images/cards/paella.jpg'
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            <span>FPL Tracker</span> is a data visualizer companion app for the official Fantasy
            Premier League game. Monitor specific Teams and Leagues within FPL.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            All data (player, team, league) comes for the unofficial FPL API.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}
