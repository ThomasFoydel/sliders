import React from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';
import CubeSide1 from 'components/Cube/CubeSide1';

const Cube = () => {
  const { xVal, yVal, zVal } = GlobalContext;

  return <CubeSide1 />;
};

export default Cube;
