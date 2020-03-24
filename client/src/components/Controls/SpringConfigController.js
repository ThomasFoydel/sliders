import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

const SpringConfigController = () => {
  const { springConfig, changeSpringConfig } = useContext(GlobalContext);
  return (
    <div>
      <select
        value={springConfig}
        onChange={e => changeSpringConfig(e.target.value)}
      >
        <option value='wobbly'>Wobbly</option>
        <option value='gentle'>Gentle</option>
        <option value='molasses'>Molasses</option>
        <option value='stiff'>Stiff</option>
        <option value='slow'>Slow</option>
      </select>
    </div>
  );
};

export default SpringConfigController;
