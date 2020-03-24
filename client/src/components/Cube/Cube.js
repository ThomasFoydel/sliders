import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';
import { useSpring, animated, config } from 'react-spring';
import colors from 'components/Controls/colors';
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
    roundActive,
    opacitySetting
  } = useContext(GlobalContext);

  const animationProps = useSpring({
    transform: `rotate3d(${xVal}, ${yVal}, ${zVal}, ${aVal}deg)`,
    config: config[springConfig]
  });

  const currentGradient = colors[cubeGradient];
  const { middle, outer } = currentGradient;

  const sidePanelAnimationProps = useSpring({
    background: `radial-gradient(rgba(${middle.r},${middle.g},${
      middle.b
    }, ${opacitySetting / 100}), rgba(${outer.r},${outer.g},${
      outer.b
    },${opacitySetting / 100}))`,
    config: config[springConfig],
    boxShadow: shineActive
      ? '0.8rem 0.8rem 20rem rgba(255, 255, 255, 0.18)'
      : '0rem 0rem 20rem rgba(255, 255, 255, 0)',
    border: borderActive
      ? '3px rgb(255, 255, 255) solid'
      : '3px rgba(255, 255, 255, 0) solid',
    borderRadius: roundActive ? '90px' : '0px'
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
