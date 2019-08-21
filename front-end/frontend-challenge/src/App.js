import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import AllCountries from './components/AllCountries'
import CurrentCountry from './components/CurrentCountry'

function App() {
  return (
    <div >
      <Navbar />
      <CurrentCountry />
      <AllCountries/>
    </div>
  );
}

export default App;
