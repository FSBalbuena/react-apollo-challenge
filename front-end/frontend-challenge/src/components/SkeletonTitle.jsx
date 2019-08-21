import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title:{
    padding:theme.spacing(3)
  }
}));

export default ()=>{
  const classes = useStyles()
    return (
        <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.title}>
            <Skeleton height={60} width="30%"/>
        </Grid>
  );
}
