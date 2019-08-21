import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

  languageTitle:{
    paddingBottom:theme.spacing(2)
  },
  chip:{
    
  }
}));

export default ({languages})=>{
    const classes = useStyles();
    return (
        <>
          <Typography variant="h5" color="textSecondary" className={classes.languageTitle}>
            Languages:
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            >
            {languages.map(language=>(
              <Grid item xs={12} sm={6} md={4}>
              <Chip label={`${language.name} -${language.native} `} className={classes.chip} color="primary"/>
            </Grid>
            ))}
          </Grid>
        </>
      )
} 