import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';

const Cube = () => {
  const { xVal, yVal, zVal, aVal, borderActive, shineActive } = useContext(
    GlobalContext
  );

  const dynamicStyle = {
    border: borderActive && '2px rgb(255, 255, 255) solid',
    boxShadow: shineActive
      ? '0.8rem 0.8rem 20rem rgba(255, 255, 255, 0.18)'
      : 'none'
  };
  return (
    <div className='scene'>
      <div
        className='cube '
        style={{
          transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)`
        }}
      >
        <div style={dynamicStyle} className='side front'>
          1
        </div>
        <div style={dynamicStyle} className='side back'>
          6
        </div>
        <div style={dynamicStyle} className='side right'>
          3
        </div>
        <div style={dynamicStyle} className='side left'>
          4
        </div>
        <div style={dynamicStyle} className='side top'>
          2
        </div>
        <div style={dynamicStyle} className='side bottom'>
          5
        </div>
      </div>
    </div>
  );
};

export default Cube;
