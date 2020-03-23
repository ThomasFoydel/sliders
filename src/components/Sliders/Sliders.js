import React, { useContext } from 'react';
import './Sliders.scss';
import { GlobalContext } from 'context/GlobalContext';

const Sliders = () => {
  const { rotateX, rotateY, rotateZ } = useContext(GlobalContext);
  console.log(useContext(GlobalContext));

  return (
    <div className='sliders-container'>
      <input
        type='range'
        id='range01'
        onChange={e => rotateX(e.target.value)}
      ></input>
      <input
        type='range'
        id='range02'
        onChange={e => rotateY(e.target.value)}
      ></input>
      <input
        type='range'
        id='range03'
        onChange={e => rotateZ(e.target.value)}
      ></input>
    </div>
  );
};

export default Sliders;
