import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';

const Cube = () => {
  const { xVal, yVal, zVal, aVal } = useContext(GlobalContext);

  return (
    <div className='scene'>
      <div
        className='cube '
        style={{ transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)` }}
      >
        <div className='side front'>1</div>
        <div className='side back'>6</div>
        <div className='side right'>3</div>
        <div className='side left'>4</div>
        <div className='side top'>2</div>
        <div className='side bottom'>5</div>
      </div>
    </div>
  );
};

export default Cube;
