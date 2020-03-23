import React from 'react';

const CubeSide2 = ({ xVal, yVal, zVal, aVal }) => {
  return (
    <div
      style={{ transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)` }}
    >
      <div className='side front'></div>
      <div className='side back'></div>
      <div className='side back'></div>
    </div>
  );
};

export default CubeSide2;
