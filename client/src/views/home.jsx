import React from 'react';
import InfoForm from '../components/info-form';

function Home({
  setStartDate,
  setEndDate,
  setDestination,
  startDate,
  endDate,
  destination,
}) {
  return (
    <InfoForm
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setDestination={setDestination}
      startDate={startDate}
      endDate={endDate}
      destination={destination}
    />
  );
}

export default Home;
