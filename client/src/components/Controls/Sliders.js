import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';

const Sliders = () => {
  const {
    rotateX,
    rotateY,
    rotateZ,
    rotateA,
    xVal,
    yVal,
    zVal,
    aVal
  } = useContext(GlobalContext);

  return (
    <div className='sliders-container'>
      <div className='flex'>
        X
        <input
          type='range'
          id='range01'
          max='360'
          value={xVal}
          onChange={e => rotateX(e.target.value)}
        ></input>
      </div>
      <div className='flex'>
        Y
        <input
          type='range'
          id='range02'
          max='360'
          value={yVal}
          onChange={e => rotateY(e.target.value)}
        ></input>
      </div>
      <div className='flex'>
        Z
        <input
          type='range'
          id='range03'
          max='360'
          value={zVal}
          onChange={e => rotateZ(e.target.value)}
        ></input>
      </div>
      <div className='flex'>
        A
        <input
          type='range'
          id='range04'
          max='360'
          value={aVal}
          onChange={e => rotateA(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Sliders;
