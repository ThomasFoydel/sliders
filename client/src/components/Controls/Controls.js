import React from 'react';
import Sliders from 'components/Controls/Sliders';
import CheckBoxes from 'components/Controls/CheckBoxes';
import SpringConfigController from 'components/Controls/SpringConfigController';
import ColorController from 'components/Controls/ColorController';

import './Controls.scss';

const Controls = () => {
  return (
    <div className='controls-container'>
      <Sliders />
      <CheckBoxes />
      <SpringConfigController />
      <ColorController />
    </div>
  );
};

export default Controls;
