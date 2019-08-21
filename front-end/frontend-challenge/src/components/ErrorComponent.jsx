import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container:{
    padding:theme.spacing(3),
    textAlign:"center"

  },
  link:{
      textDecoration:"none"
  }
}));

export default ({message})=>{
  const classes = useStyles();
  return (
    <Grid container
    direction="column"
    justify="center"
    alignItems="center" className={classes.container}>
        <Typography variant="h2" component="h1">
            Oops!
        </Typography>
        <Typography variant="h4" component="h2">
            Something went wrong
        </Typography>
        <Typography variant="body1" component="p">
           {message}
        </Typography>
    </Grid>)
        
    }