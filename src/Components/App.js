import React, { useState } from 'react';
import Lists from './Lists/Lists';

import './App.css'
import data from './Data/data';
const App = () => {
  const [ticks, setTicks] = useState(data);
  return (
    <>
      <div className="heading">
        <h1>Flight Search engine</h1>
      </div>
      <div className="main-content">
        <Lists ticks={ticks} />
      </div>

    </>
  )
}
export default App;