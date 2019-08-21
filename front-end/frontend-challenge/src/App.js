import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import AllCountries from './containers/AllCountries'
import CurrentCountry from './containers/CurrentCountry'
import Home from './components/Home'

function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/countries" exact component={AllCountries}/>
        <Route path="/countries/:code" exact component={CurrentCountry}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
