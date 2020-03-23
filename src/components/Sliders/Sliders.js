import React from 'react';
import './Sliders.scss';
const Sliders = () => {
  const handleSlide = e => {
    console.log(e.target.value);
  };
  return (
    <div className='sliders-container'>
      <input type='range' id='range01' onChange={handleSlide}></input>
    </div>
  );
};

export default Sliders;
