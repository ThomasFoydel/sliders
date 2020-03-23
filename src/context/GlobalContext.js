import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  xVal: 0,
  yVal: 0,
  zVal: 0,
  aVal: 0
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

  const { xVal, yVal, zVal, aVal } = state;
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
        rotateA
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
