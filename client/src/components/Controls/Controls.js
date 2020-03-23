import React from 'react';
import Sliders from 'components/Controls/Sliders';
import CheckBoxes from 'components/Controls/CheckBoxes';

import './Controls.scss';

const Controls = () => {
  return (
    <div className='controls-container'>
      <Sliders />
      <CheckBoxes />
    </div>
  );
};

export default Controls;
