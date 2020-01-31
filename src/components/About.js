import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>About Section</h1>
    </div>
  );
}
