import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration:"none",
    color:"inherit"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Avatar alt="Logo" src="http://www.orxeta.es/wp-content/uploads/2018/07/Idiomas.png" className={classes.menuButton} />
          <Typography variant="h6" component={Link} to="/" className={classes.title}>
            CountryApp
          </Typography>
          <Button color="inherit" component={Link} to="/countries">Countries</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*
import React from 'react'

export default ()=>(

    <nav className="navbar">
        <div className="navbar-brand">
        <img className="navbar-img" src="http://www.orxeta.es/wp-content/uploads/2018/07/Idiomas.png" alt=""/>
        <span >App</span>
        </div>
        <span className="navbar-link-right">Countries</span>
    </nav>
)*/