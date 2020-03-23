import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  xVal: 0,
  yVal: 360,
  zVal: 0,
  aVal: 270,
  borderActive: false,
  shineActive: false
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

  const { xVal, yVal, zVal, aVal, borderActive, shineActive } = state;
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
        toggleShine
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};