import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';
import { useSpring, animated, config } from 'react-spring';

const Cube = () => {
  const {
    xVal,
    yVal,
    zVal,
    aVal,
    borderActive,
    shineActive,
    springConfig,
    cubeGradient
  } = useContext(GlobalContext);

  const dynamicStyle = {
    border: borderActive && '2px rgb(255, 255, 255) solid',
    boxShadow: shineActive
      ? '0.8rem 0.8rem 20rem rgba(255, 255, 255, 0.18)'
      : 'none',
    background: cubeGradient
  };

  const animationProps = useSpring({
    transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)`,
    config: config[springConfig]
  });

  return (
    <div className='scene'>
      <animated.div className='cube' style={animationProps}>
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
      </animated.div>
    </div>
  );
};

export default Cube;
