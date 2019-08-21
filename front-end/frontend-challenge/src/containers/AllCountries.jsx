import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CountryLayout from '../components/CountryLayout'

const useStyles = makeStyles(theme => ({
  title:{
    textAlign:"center",
    padding:theme.spacing(3)
  }
}));

export default ()=>{
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
    {data.countries
      .map(country=><CountryLayout country={country}/>)}
    </>
  );
}