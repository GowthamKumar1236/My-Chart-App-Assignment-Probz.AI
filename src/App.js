// src/App.js
import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import './App.css';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div className="App">
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart timeframe={timeframe} />
    </div>
  );
};

export default App;
