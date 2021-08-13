import data from './data'
const {routes, airlines, airports} = data;

function getAirlineById(id) {
  return airlines.find(airline => airline.id === id)
}

function getAirportByCode(code) {
  return airports.find(airport => airport.code === code)
}

function getRows() {
  return routes.map(route => {
    return {
      airline: getAirlineById(route.airline).name,
      src: getAirportByCode(route.src).name,
      dest: getAirportByCode(route.dest).name
      }
  })
}

export { getRows}
