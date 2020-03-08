import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Toggle from './condition/Toggle';
import Persons from './Person/Person'
import List from './condition/list'
import Map from './condition/Map';
function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Toggle />
      <List />
      <Persons name="mage" age={Math.floor(Math.random()*30)}/>
      <Persons name="yogith" age ="10"/>
      <Persons name="poovu" age="12"/>
      {/* <Workmap /> */}
      <Map />

    </div>
  );
}

export default App;
