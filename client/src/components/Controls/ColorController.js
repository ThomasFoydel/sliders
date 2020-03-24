import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

const ColorController = () => {
  const { changeCubeGradient } = useContext(GlobalContext);

  return (
    <div>
      <select onChange={e => changeCubeGradient(e.target.value)}>
        <option value={'strawberryBanana'}>Stawberry Banana</option>
        <option value={'mint'}>Mint</option>
        <option value={'mango'}>Mango</option>
        <option value={'berry'}>Berry</option>
        <option value={'apple'}>Apple</option>
      </select>
    </div>
  );
};

export default ColorController;
