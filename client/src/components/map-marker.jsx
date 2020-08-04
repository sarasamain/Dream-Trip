import React from 'react';
import '../styles/map-marker.css';

const MapMarker = ({ text, $hover }) => {
  return (
    <div className={$hover ? 'circle hover' : 'circle'}>
      <span className="circleText">{text}</span>
    </div>
  );
};

export default MapMarker;
