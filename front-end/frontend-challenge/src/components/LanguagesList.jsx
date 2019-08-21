import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

  languageTitle:{
    paddingBottom:theme.spacing(2),
    paddingTop:theme.spacing(2)

  },
  chip:{
    marginRight:theme.spacing(2)
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
            {languages.map(language=>(<Chip 
              key={language.name}
              label={`${language.name} -${language.native} `} 
              className={classes.chip} color="primary"/>
            ))}
          </Grid>
        </>
      )
} 