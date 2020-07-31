import React from 'react';
import { MarkerStyle } from '../styles/map-marker';

export default function MapMarker({ text }) {
  return <div style={MarkerStyle}>{text}</div>;
}
