import React, {useState, useEffect} from 'react';
import { getRows } from '../utilities';

const perPage = 25;

const Table = ({className, airlineFilter, airportFilter}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const start = pageNumber * perPage;
  const end = start + perPage;
  const rows = getRows(airlineFilter, airportFilter);

  const columnHeaders = ["Airline", "Source Airport", "Destination Airport"];
  
  useEffect(() => {
    setPageNumber(0)
  }, [airlineFilter, airportFilter])
  
  const displayedRows = rows.slice(start, end).map(row => {
    return <tr key={Object.values(row).join(":")}>
      <td>{row.airline}</td>
      <td>{row.src}</td>
      <td>{row.dest}</td>
    </tr>
  });

  const nextPage = () => {
    setPageNumber(pageNumber + 1)
  }
  const prePage = () => {
    setPageNumber(pageNumber - 1)
  }

  return (
    <>
      <table className={className}>
        <thead>
          <tr>
            {columnHeaders.map((val) => {
              return <th key={val}>{val}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {displayedRows}
        </tbody>
      </table>
      <p>Showing {start + 1} - {start + displayedRows.length} of {rows.length}</p>

      <button onClick={prePage} disabled={pageNumber === 0}>Previouse Page</button>&nbsp;
      <button onClick={nextPage} disabled={end >= rows.length}>Next Page</button>
    </>
  )
}

export default Table;