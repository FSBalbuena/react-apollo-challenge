import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Link} from 'react-router-dom'
import LanguagesList from './LanguagesList';

const useStyles = makeStyles(theme => ({

  card: {
    maxWidth: "80%",
    margin:"10px auto",
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

export default ({country,children})=>{
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar 
                aria-label="recipe" className={classes.avatar}>
                  {country.code}
                </Avatar>}
              title={<Typography 
                    variant="h4" component={Link} 
                    to={`/countries/${country.code}`} 
                    color="textSecondary">
                        {country.name}
                    </Typography>}
              subheader={<Typography  
                    variant="h6" color="textSecondary">
                        {country.native}
                    </Typography>}
            />
            <CardContent>
                {children}
              <LanguagesList languages={country.languages}/>
            </CardContent>
      </Card>
      )
} 