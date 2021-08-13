import React, { Component } from 'react';
import './App.css';
import SelectBox from './components/SelectBox';
import Table from './components/Table';
import {getAirlines, getAirports} from './utilities'

const App = () => {
  const airlineOptions = getAirlines();
  const airportOptions = getAirports();

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <p>
        Welcome to the app!
      </p>
      <SelectBox options={airlineOptions} defaultOption="All Airlines" label="Show routes on "/>
      <SelectBox options={airportOptions} defaultOption="All Airports" label="flying in or out of "/>
      <Table className="routes-table"/>
    </section>
  </div>
  ) 
}

export default App;