import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map-marker';

function SimpleMap({ days }) {
  const defaultProps = {
    center: {
      lat: days[1][0].geometry.location.lat,
      lng: days[1][0].geometry.location.lng,
    },
    zoom: 12,
  };

  const K_MARGIN_TOP = 30;
  const K_MARGIN_RIGHT = 30;
  const K_MARGIN_BOTTOM = 30;
  const K_MARGIN_LEFT = 30;
  
  return (

    <div style={{ height: '89vh', width: '100%', padding: '20px', boxSizing: 'border-box', position: 'fixed', maxWidth: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
      >
        {Object.keys(days).map((day) => (
          days[day].map((place, index) => {
            const key = `${day}.${index + 1}`

            return (
              <MapMarker
                key={key}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                text={key}
              />
            );
          })
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
