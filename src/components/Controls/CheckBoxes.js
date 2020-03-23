import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';

const CheckBoxes = () => {
  const { borderActive, toggleBorders } = useContext(GlobalContext);
  console.log('bordersActive: ', borderActive);
  return (
    <div>
      <input
        checked={borderActive}
        onChange={e => {
          toggleBorders(e.target.checked);
        }}
        type='checkbox'
      ></input>{' '}
      borders
    </div>
  );
};

export default CheckBoxes;
