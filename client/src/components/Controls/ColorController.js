import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
const ColorController = () => {
  const { cubeGradient, changeCubeGradient } = useContext(GlobalContext);

  return (
    <div>
      <select onChange={e => changeCubeGradient(e.target.value)}>
        <option value='radial-gradient(rgba(240, 80, 255, 1), rgba(255, 162, 80, 0.8))'>
          Stawberry Banana
        </option>
        <option value=' radial-gradient(rgb(57, 175, 25), rgb(51, 237, 224))'>
          Mint
        </option>
        <option value='radial-gradient(rgba(167, 15, 15, 1),rgba(237, 237, 51, 0.932))'>
          Mango
        </option>
        <option value='radial-gradient(rgba(51, 51, 237, 0.932),rgba(106, 12, 212, 0.934))'>
          Berry
        </option>
        <option value='radial-gradient(rgb(0, 94, 255) 15%,rgba(51, 237, 172, 0.99) 95%)'>
          Apple
        </option>
        <option value='radial-gradient(rgba(0, 94, 255,0) 15%,rgba(51, 237, 172, 0) 95%)'>
          Clear
        </option>
      </select>
    </div>
  );
};

export default ColorController;

// import React, { useContext } from 'react';
// import { GlobalContext } from 'context/GlobalContext';

// const SpringConfigController = () => {
//   const { springConfig, changeSpringConfig } = useContext(GlobalContext);
//   return (
//     <div>
//       <select
//         id='cars'
//         name='cars'
//         value={springConfig}
//         onChange={e => changeSpringConfig(e.target.value)}
//       >
//         <option value='wobbly'>Wobbly</option>
//         <option value='gentle'>Gentle</option>
//         <option value='molasses'>Molasses</option>
//         <option value='stiff'>Stiff</option>
//         <option value='slow'>Slow</option>
//       </select>
//     </div>
//   );
// };

// export default SpringConfigController;
