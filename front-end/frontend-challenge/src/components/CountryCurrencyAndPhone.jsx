import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AttachMoneyIcon from '@material-ui/icons/MonetizationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  languageTitle:{
    paddingBottom:theme.spacing(2)
  }
}));

export default ({currency, phone})=>{
    const classes = useStyles();
    return (
        <>
          <Typography variant="h5" color="textSecondary" className={classes.languageTitle}>
            Usefull Information:
          </Typography>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            >
            <List>
               <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <AttachMoneyIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Currency" secondary={currency} />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <LocalPhoneIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Phone area code" secondary={phone} />
               </ListItem>
             </List>
          </Grid>
        </>
      )
} 