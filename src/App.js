import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

const App = () => {

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <p>
        Welcome to the app!
      </p>
      <Table className="routes-table"/>
    </section>
  </div>
  ) 
}

export default App;