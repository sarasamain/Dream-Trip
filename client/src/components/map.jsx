import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map-marker';

function SimpleMap({ places }) {
  const defaultProps = {
    center: {
      lat: places[0].geometry.location.lat,
      lng: places[0].geometry.location.lng,
    },
    zoom: 12,
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {console.log(process.env)}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {places.map((place) => {
          console.log(place);
          return (
            <MapMarker
              lat={place.geometry.location.lat}
              lng={place.geometry.location.lng}
              text={place.name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
