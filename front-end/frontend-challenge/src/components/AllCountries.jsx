import React from 'react'
import {Link} from 'react-router-dom' 
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default ()=>{
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
    <table style={{width:"80%"}}>
    <tr>
      <th>Name</th>
      <th>Lenguages</th>
    </tr>
    {data.countries.map(country=>(
        <tr>
        <td><Link to={`/countries/${country.code}`}>{`${country.name}/${country.native}`}</Link></td>
        <td>
            <ul>
                {country.languages?country.languages.map(language=><li>{`${language.name}/${language.native}`}</li>):null}
            </ul>
        </td>
      </tr>
    ))}
  </table>
  )
}