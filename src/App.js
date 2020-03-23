import React from 'react';
import Cube from 'components/Cube/Cube';
import Sliders from 'components/Sliders/Sliders';
import { GlobalProvider } from 'context/GlobalContext';

import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <div className='app-container'>
        <div className='center'>
          <Cube />
        </div>
        <Sliders />
      </div>
    </GlobalProvider>
  );
}

export default App;
