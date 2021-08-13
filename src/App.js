import React, { Component } from 'react';
import './App.css';
import { getRows } from './utilities'

const App = () => {
  const rows = getRows();
  const columnHeaders = ["Airline", "Source Airport", "Destination Airport"]

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <p>
        Welcome to the app!
      </p>
      <table>
        <thead>
          <tr>
            {columnHeaders.map((val, index) => {
              return <td key={val + index}>{val}</td>
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return <tr key={Object.values(row).join(":")}>
              <td>{row.airline}</td>
              <td>{row.src}</td>
              <td>{row.dest}</td>
            </tr>
          })}
        </tbody>
      </table>
    </section>
  </div>
  ) 
}

export default App;