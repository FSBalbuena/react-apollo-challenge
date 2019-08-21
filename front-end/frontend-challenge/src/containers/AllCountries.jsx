import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CountryLayout from '../components/CountryLayout'
import { makeStyles } from '@material-ui/core/styles';
import SkeletonCountry from '../components/SkeletonCountry'
import SkeletonTitle from '../components/SkeletonTitle'
import ErrorComponent from '../components/ErrorComponent'
const useStyles = makeStyles(theme => ({
  title:{
    textAlign:"center",
    margin:"auto",
    marginTop:theme.spacing(3),
    marginBottom:theme.spacing(3),
    width:"90%"
  }
}));

export default ()=>{
  const classes = useStyles();
  const { loading, error, data } = useQuery(gql`
  {
    countries{
              code,
              name,
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

  if (loading) return (
    <>
    <SkeletonTitle/>
    {[1,2,3].map(index=><SkeletonCountry key={index}/>)}
    </>);
  if (error) return <ErrorComponent message={"there is a problem fetching the countries"}/>
  
  return (
    <>
    <Typography variant="h3" color="textSecondary" className={classes.title}>
          Countries
    </Typography>
    {data.countries
      .map(country=><CountryLayout key={country.name} country={country}/>)}
    </>
  );
}