import React from 'react';
import Lottie from 'react-lottie';
import animationData from './../11425-travel-icons-luggage.json'; // should this be JSON?

export default function Animation() {
  const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}