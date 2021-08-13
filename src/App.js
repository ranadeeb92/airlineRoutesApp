import React, { useState } from 'react';
import './App.css';
import SelectBox from './components/SelectBox';
import Table from './components/Table';
import Map from './components/Map';
import {getAirlines, getAirports} from './utilities'

const App = () => {
  const [airlineFilter, setAirlineFilter] = useState("all");
  const [airportFilter, setAirportFilter] = useState("all");

  const airlineOptions = getAirlines(airportFilter);
  const airportOptions = getAirports(airlineFilter);

  const reset = () => {
    setAirportFilter("all");
    setAirlineFilter('all');
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Map airlineFilter={airlineFilter} airportFilter={airportFilter} onSelect={setAirportFilter}/>
      <SelectBox options={airlineOptions} value={airlineFilter} defaultOption="All Airlines" label="Show routes on " onSelect={setAirlineFilter}/>
      <SelectBox options={airportOptions} value={airportFilter} defaultOption="All Airports" label="flying in or out of " onSelect={setAirportFilter}/>
      <button onClick={reset}>Show All Routes</button>
      <Table className="routes-table" airlineFilter={airlineFilter} airportFilter={airportFilter}/>
    </section>
  </div>
  ) 
}

export default App;