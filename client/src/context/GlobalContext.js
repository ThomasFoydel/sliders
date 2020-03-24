import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import colors from 'components/Controls/colors';

const { middle, outer } = colors.strawberryBanana;

const initialState = {
  xVal: 0,
  yVal: 360,
  zVal: 0,
  aVal: 270,
  borderActive: false,
  shineActive: false,
  springConfig: 'wobbly',
  cubeGradient: 'strawberryBanana',
  roundActive: false,
  opacitySetting: 100
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function rotateX(rotateValue) {
    dispatch({
      type: 'ROTATE_X',
      payload: rotateValue
    });
  }
  function rotateY(rotateValue) {
    dispatch({
      type: 'ROTATE_Y',
      payload: rotateValue
    });
  }
  function rotateZ(rotateValue) {
    dispatch({
      type: 'ROTATE_Z',
      payload: rotateValue
    });
  }
  function rotateA(rotateValue) {
    dispatch({
      type: 'ROTATE_A',
      payload: rotateValue
    });
  }
  function toggleBorders(boolVal) {
    dispatch({
      type: 'TOGGLE_BORDERS',
      payload: boolVal
    });
  }
  function toggleShine(boolVal) {
    dispatch({
      type: 'TOGGLE_SHINE',
      payload: boolVal
    });
  }
  function changeSpringConfig(configVal) {
    dispatch({
      type: 'CHANGE_SPRING_CONFIG',
      payload: configVal
    });
  }
  function changeCubeGradient(gradientString) {
    dispatch({
      type: 'CHANGE_CUBE_GRADIENT',
      payload: gradientString
    });
  }
  function toggleRound(boolVal) {
    dispatch({
      type: 'TOGGLE_ROUND',
      payload: boolVal
    });
  }
  function changeOpacity(opacityVal) {
    dispatch({
      type: 'CHANGE_OPACITY',
      payload: opacityVal
    });
  }

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
  } = state;
  return (
    <GlobalContext.Provider
      value={{
        xVal,
        yVal,
        zVal,
        aVal,
        rotateX,
        rotateY,
        rotateZ,
        rotateA,
        borderActive,
        toggleBorders,
        shineActive,
        toggleShine,
        springConfig,
        changeSpringConfig,
        cubeGradient,
        changeCubeGradient,
        roundActive,
        toggleRound,
        opacitySetting,
        changeOpacity
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
