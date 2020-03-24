import React from 'react';
import Cube from 'components/Cube/Cube';
import Controls from 'components/Controls/Controls';
import { GlobalProvider } from 'context/GlobalContext';

import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <div className='background-blur' />
      <div className='app-container'>
        <div className='center'>
          <Cube />
        </div>
        <Controls />
      </div>
      {/* <div className='panels-container'>
        <div className='stawberrybanana panel'></div>
        <div className='berry panel'></div>
        <div className='mango panel'></div>
        <div className='mint panel'></div>
        <div className='apple panel'></div>
      </div> */}
    </GlobalProvider>
  );
}

export default App;
