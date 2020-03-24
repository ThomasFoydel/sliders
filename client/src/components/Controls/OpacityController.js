import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

const OpacityController = () => {
  const { opacitySetting, changeOpacity } = useContext(GlobalContext);
  return (
    <div>
      opacity
      <input
        type='range'
        value={opacitySetting}
        onChange={e => changeOpacity(e.target.value)}
      ></input>
    </div>
  );
};

export default OpacityController;
