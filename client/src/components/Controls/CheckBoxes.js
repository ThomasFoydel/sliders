import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';

const CheckBoxes = () => {
  const { borderActive, toggleBorders, shineActive, toggleShine } = useContext(
    GlobalContext
  );
  //   console.log('bordersActive: ', borderActive);
  return (
    <div className='checkboxes'>
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

      <div>
        <input
          checked={shineActive}
          onChange={e => {
            toggleShine(e.target.checked);
          }}
          type='checkbox'
        ></input>{' '}
        shine
      </div>
    </div>
  );
};

export default CheckBoxes;
