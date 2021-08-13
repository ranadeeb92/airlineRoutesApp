import data from './data'
const {routes, airlines, airports} = data;

function getAirlineById(id) {
  return airlines.find(airline => airline.id === id)
}

function getAirportByCode(code) {
  return airports.find(airport => airport.code === code)
}

function getRows(airlineFilter, airportFilter) {
  let filteredRoutes = routes;
  if(airlineFilter) {
    filteredRoutes = filteredRoutes.filter(route => route.airline === airlineFilter)
  }
  if(airportFilter) {
    filteredRoutes = filteredRoutes.filter(route => route.src === airportFilter || route.dest === airportFilter)
  }
  return filteredRoutes.map(route => {
    return {
      airline: getAirlineById(route.airline).name,
      src: getAirportByCode(route.src).name,
      dest: getAirportByCode(route.dest).name
      }
  })
}

function getAirlines() {
  return airlines.map(airline => {
    return {
      key: airline.id,
      value: airline.name
    }
  })
}

function getAirports() {
  return airports.map(airport => {
    return {
      key: airport.code,
      value: airport.name
    }
  })
}

export { getRows, getAirlines, getAirports}
