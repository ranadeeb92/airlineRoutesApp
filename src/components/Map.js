import React from 'react';
import { getMapRoutes } from '../utilities';

const Map = ({airlineFilter, airportFilter, onSelect}) => {
  let mapRoutes = getMapRoutes(airlineFilter, airportFilter);
  
  return (
    <div>
      <svg className="map" viewBox="-180 -90 360 180">
        <g transform="scale(1 -1)">
          <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>

          {mapRoutes.map(({airline, src, dest}) => {
            return <g key={`${src.long}${src.lat}${dest.long}${dest.lat}${airline}`}>
              <circle className="source" cx={src.long} cy={src.lat} onClick={() => onSelect(src.code)}>
                <title></title>
              </circle> 
              <circle className="destination" cx={dest.long} cy={dest.lat} onClick={() => onSelect(dest.code)}>
                <title></title>
              </circle>
              <path d={`M${src.long} ${src.lat} L ${dest.long} ${dest.lat}`} />
            </g>
          })}
        </g>  
      </svg>
    </div>
  );
}

export default Map;