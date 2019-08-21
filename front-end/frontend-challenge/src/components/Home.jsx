import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MapIcon from '@material-ui/icons/Map';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container:{
    padding:theme.spacing(3)
  },
  link:{
      textDecoration:"none"
  }
}));

export default ()=>{
  const classes = useStyles();
  return (
    <Grid container
    direction="column"
    justify="center"
    alignItems="center" className={classes.container}>
        <Typography variant="h1" component="h1">
            Hi there!
        </Typography>
        <Typography variant="h2" component="h2">
        Welcome to CountryApp
        </Typography>
        <Typography variant="body1" component="p">
        Choose beetween this routes:
        </Typography>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <List>
               <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <MapIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary={<Link to="/countries" className={classes.link}>{"/countries"}</Link>} secondary={"To see a list of all countries"} />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <LocationOnIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="/countries/<code>" secondary={"Place the code of the country that you want to see"} />
               </ListItem>
             </List>
          </Grid>

    </Grid>
)
  }