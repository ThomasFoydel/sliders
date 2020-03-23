import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';

const Cube = () => {
  const { xVal, yVal, zVal, aVal, borderActive } = useContext(GlobalContext);

  return (
    <div className='scene'>
      <div
        className='cube '
        style={{
          transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)`
        }}
      >
        <div
          style={{
            border: borderActive ? '2px rgb(255, 255, 255) solid' : 'none'
          }}
          className='side front'
        >
          1
        </div>
        <div
          style={{
            border: borderActive ? '2px rgb(255, 255, 255) solid' : 'none'
          }}
          className='side back'
        >
          6
        </div>
        <div
          style={{
            border: borderActive ? '2px rgb(255, 255, 255) solid' : 'none'
          }}
          className='side right'
        >
          3
        </div>
        <div
          style={{
            border: borderActive ? '2px rgb(255, 255, 255) solid' : 'none'
          }}
          className='side left'
        >
          4
        </div>
        <div
          style={{
            border: borderActive ? '2px rgb(255, 255, 255) solid' : 'none'
          }}
          className='side top'
        >
          2
        </div>
        <div
          style={{
            border: borderActive ? '2px rgb(255, 255, 255) solid' : 'none'
          }}
          className='side bottom'
        >
          5
        </div>
      </div>
    </div>
  );
};

export default Cube;
