import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import {Link} from 'react-router-dom' 
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title:{
    textAlign:"center",
    padding:theme.spacing(3)
  },
  languageTitle:{
    paddingBottom:theme.spacing(2)
  },
  card: {
    maxWidth: "80%",
    margin:"0 auto"
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip:{
    
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(gql`
  {
    countries{
              code,
              name,
              currency,
              native,
              languages{
                        name,
                        native
                        },
              continent{
                        name
                        }
            }
  }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <>
    <Typography variant="h1" color="textSecondary" className={classes.title}>
          Countries
    </Typography>
    {data.countries.map(country=>(
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {country.code}
          </Avatar>
        }
        title={<Typography variant="h4" component={Link} to={`/countries/${country.code}`} color="textSecondary">
        {country.name}
      </Typography>}
        subheader={<Typography variant="h6" color="textSecondary">
        {country.native}
      </Typography>}
      />
      <CardContent>
        <Typography variant="h5" color="textSecondary" className={classes.languageTitle}>
          Languages:
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          >
          {country.languages.map(language=>(
            <Grid item xs={12} sm={6} md={4}>
            <Chip label={`${language.name} -${language.native} `} className={classes.chip} color="primary"/>
          </Grid>
          ))}

        </Grid>
      </CardContent>
    </Card>
    ))}
    </>
  );
}