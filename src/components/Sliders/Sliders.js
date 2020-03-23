import React, { useContext } from 'react';
import './Sliders.scss';
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
  console.log(useContext(GlobalContext));

  return (
    <div className='sliders-container'>
      <input
        type='range'
        id='range01'
        max='360'
        value={xVal}
        onChange={e => rotateX(e.target.value)}
      ></input>
      <input
        type='range'
        id='range02'
        max='360'
        value={yVal}
        onChange={e => rotateY(e.target.value)}
      ></input>
      <input
        type='range'
        id='range03'
        max='360'
        value={zVal}
        onChange={e => rotateZ(e.target.value)}
      ></input>
      <input
        type='range'
        id='range04'
        max='360'
        value={aVal}
        onChange={e => rotateA(e.target.value)}
      ></input>
    </div>
  );
};

export default Sliders;
