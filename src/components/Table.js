import React from 'react';
import { getRows } from '../utilities';

const Table = () => {
  const rows = getRows();
  const columnHeaders = ["Airline", "Source Airport", "Destination Airport"];
  
  const displayedRows = rows.map(row => {
    return <tr key={Object.values(row).join(":")}>
      <td>{row.airline}</td>
      <td>{row.src}</td>
      <td>{row.dest}</td>
    </tr>
  });

  return (
    <table>
        <thead>
          <tr>
            {columnHeaders.map((val, index) => {
              return <td key={val + index}>{val}</td>
            })}
          </tr>
        </thead>
        <tbody>
          {displayedRows}
        </tbody>
      </table>
  )
}

export default Table;