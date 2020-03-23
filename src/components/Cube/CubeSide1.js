import React from 'react';

const CubeSide1 = ({ xVal, yVal, zVal, aVal }) => {
  return (
    <div
      style={{ transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)` }}
    ></div>
  );
};

export default CubeSide1;
