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
    cubeGradient,
    roundActive
  } = useContext(GlobalContext);

  const animationProps = useSpring({
    transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)`,
    config: config[springConfig]
  });

  const sidePanelAnimationProps = useSpring({
    background: cubeGradient,
    config: config[springConfig],
    boxShadow: shineActive
      ? '0.8rem 0.8rem 20rem rgba(255, 255, 255, 0.18)'
      : '0rem 0rem 20rem rgba(255, 255, 255, 0)',
    border: borderActive
      ? '4px rgb(255, 255, 255) solid'
      : '2px rgba(255, 255, 255, 0) solid',
    borderRadius: roundActive ? '50%' : '0%'
  });

  return (
    <div className='scene'>
      <animated.div className='cube' style={animationProps}>
        <div className='side front'>
          <animated.div
            className='cube-panel-spring'
            style={sidePanelAnimationProps}
          >
            1
          </animated.div>
        </div>

        <div className='side back'>
          <animated.div
            className='cube-panel-spring'
            style={sidePanelAnimationProps}
          >
            6
          </animated.div>
        </div>
        <div className='side right'>
          <animated.div
            className='cube-panel-spring'
            style={sidePanelAnimationProps}
          >
            3
          </animated.div>
        </div>
        <div className='side left'>
          <animated.div
            className='cube-panel-spring'
            style={sidePanelAnimationProps}
          >
            4
          </animated.div>
        </div>
        <div className='side top'>
          <animated.div
            className='cube-panel-spring'
            style={sidePanelAnimationProps}
          >
            2
          </animated.div>
        </div>
        <div className='side bottom'>
          <animated.div
            className='cube-panel-spring'
            style={sidePanelAnimationProps}
          >
            5
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
};

export default Cube;
