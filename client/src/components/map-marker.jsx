import React from 'react';
import '../styles/map-marker.css';

const MapMarker = ({ text, $hover, mouseEnter }) => {
  return (
    <div
      className={$hover ? 'circle hover' : 'circle'}
      // onMouseEnter={mouseEnter(Number(text))}
    >
      <span className="circleText">{text}</span>
    </div>
  );
};

export default MapMarker;
