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
  if(airlineFilter !== "all") {
    filteredRoutes = filteredRoutes.filter(route =>route.airline === Number(airlineFilter))
  }
  if(airportFilter !== "all") {
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

function getMapRoutes(airlineFilter, airportFilter) {
  const getAirportLatAndLong = (airport) => {
    return {
      lat: airport.lat,
      long: airport.long
    }
  }

  let filteredRoutes = routes;
  if(airlineFilter !== "all") {
    filteredRoutes = filteredRoutes.filter(route =>route.airline === Number(airlineFilter))
  }
  if(airportFilter !== "all") {
    filteredRoutes = filteredRoutes.filter(route => route.src === airportFilter || route.dest === airportFilter)
  }
  return filteredRoutes.map(route => {
    return {
      airline: route.airline,
      src: getAirportLatAndLong(getAirportByCode(route.src)),
      dest: getAirportLatAndLong(getAirportByCode(route.dest))
      }
  })
}



function getAirlines(filter) {
  let airlineIds = new Set();

  if(filter !== "all") {
    routes.forEach(route => {
      if(route.src === filter || route.dest === filter) {
        airlineIds.add(route.airline)
      }
    });

  }
  return airlines.map(airline => {
    return {
      key: airline.id,
      value: airline.name,
      active : filter === "all" || airlineIds.has(airline.id) 
    }
  })
}

function getAirports(filter) {
  let airportCodes = new Set();
  if(filter !== "all") {
    routes.forEach(route => {
      if(route.airline === Number(filter)) {
        airportCodes.add(route.src)
        airportCodes.add(route.dest)
      }
    })
  }
  return airports.map(airport => {
    return {
      key: airport.code,
      value: airport.name,
      active: filter === "all" || airportCodes.has(airport.code)
    }
  })
}

export { getRows, getAirlines, getAirports, getMapRoutes}
