import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

const OpacityController = () => {
  const { opacitySetting, changeOpacity } = useContext(GlobalContext);
  return (
    <div className='opacity-controller-container'>
      <div>O</div>
      <input
        type='range'
        value={opacitySetting}
        onChange={e => changeOpacity(e.target.value)}
      ></input>
    </div>
  );
};

export default OpacityController;
