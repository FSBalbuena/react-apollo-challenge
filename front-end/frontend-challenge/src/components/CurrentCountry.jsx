import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default ()=>{
   const codeParams="AR"
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

  return (
    <table style={{width:"80%"}}>
    <tr>
      <th>Name</th>
      <th>Lenguages</th>
    </tr>
    <tr>
        <td>{`${data.country.name}/${data.country.native}`}</td>
        <td>
            <ul>
                {data.country.languages
                    .map(language=><li>{`${language.name}/${language.native}`}</li>)}
            </ul>
        </td>
    </tr>
  </table>
  )
}