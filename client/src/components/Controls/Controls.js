import React from 'react';
import Sliders from 'components/Controls/Sliders';
import CheckBoxes from 'components/Controls/CheckBoxes';
import SpringConfigController from 'components/Controls/SpringConfigController';
import ColorController from 'components/Controls/ColorController';
import OpacityController from 'components/Controls/OpacityController';

import './Controls.scss';

const Controls = () => {
  return (
    <div className='controls-container'>
      <div>
        <Sliders />
        <OpacityController />
      </div>
      <div>
        <CheckBoxes />
        <SpringConfigController />
        <ColorController />
      </div>
    </div>
  );
};

export default Controls;
