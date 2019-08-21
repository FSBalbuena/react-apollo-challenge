import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CountryLayout from '../components/CountryLayout'
import CountryCurrencyAndPhone from '../components/CountryCurrencyAndPhone'

const useStyles = makeStyles(theme => ({
  title:{
    textAlign:"center",
    padding:theme.spacing(3)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(data.country){
    const country=data.country
    return (
        <>
        <Typography variant="h1" color="textSecondary" className={classes.title}>
              {country.name}
        </Typography>
        <CountryLayout country={country}>
          <CountryCurrencyAndPhone currency={country.currency} phone={country.phone}/>
        </CountryLayout >

        </>
      
  )
  }
  else{
    return <h4>Country No Found</h4>
  }
}