import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CountryLayout from '../components/CountryLayout'
import CountryCurrencyAndPhone from '../components/CountryCurrencyAndPhone'

import ErrorComponent from '../components/ErrorComponent'
import SkeletonCountry from '../components/SkeletonCountry'
import SkeletonTitle from '../components/SkeletonTitle'
const useStyles = makeStyles(theme => ({
  title:{
    textAlign:"center",
    margin:"auto",
    marginTop:theme.spacing(3),
    marginBottom:theme.spacing(3),
    width:"90%"
  }
}));

export default (props)=>{
   const codeParams=props.match.params.code.toUpperCase()
  const classes = useStyles();

  const { loading, error, data } = useQuery(gql`
  {
    country(code:"${codeParams}"){
      name,
      native,
      phone,
      continent{
              name
              },
      currency,
      languages{
            name,
            native
            },
      }
  }
  `);

  if (loading) return (
    <>
    <SkeletonTitle/>
    <SkeletonCountry key={"skeleton"}/>
    </>);
  if (error) return <ErrorComponent message={"There is a problem fetching the country"}/>;
  if(data.country){
    const country={...data.country,code:codeParams}
    return (
        <>
        <Typography variant="h3" color="textSecondary" className={classes.title}>
              {country.name}
        </Typography>
        <CountryLayout country={country}>
          <CountryCurrencyAndPhone currency={country.currency} phone={country.phone}/>
        </CountryLayout >

        </>
      
  )
  }
  else{
    return <ErrorComponent message={"Country not found"}/>
  }
}