import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';
import CubeSide1 from 'components/Cube/CubeSide1';

const Cube = () => {
  const { xVal, yVal, zVal, aVal } = useContext(GlobalContext);

  return (
    <div className='scene'>
      <div
        className='cube '
        style={{ transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)` }}
      >
        {/* <CubeSide1 xVal={xVal} yVal={yVal} zVal={zVal} aVal={aVal} /> */}
        <div className='side front '></div>
        <div className='side back'></div>
        <div className='side right'></div>
        <div className='side left'></div>
        <div className='side top'></div>
        <div className='side bottom'></div>
      </div>
    </div>
  );
};

export default Cube;
