import React from 'react'
import {Link} from 'react-router-dom'
export default ()=>(
    <div>
        <h1>Hi there!</h1>
        <h2>Welcome to CountryApp</h2>
        <p>Choose between this routes:</p>
        <ul>
            <li><Link to="/countries">{"/countries"}</Link></li>
            <li>/countries/<small>`put your country code here`</small></li>
        </ul>
    </div>
)