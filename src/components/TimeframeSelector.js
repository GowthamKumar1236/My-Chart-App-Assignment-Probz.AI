// src/components/TimeframeSelector.js
import React from 'react';
import '../styles/TimeframeSelector.css';

const TimeframeSelector = ({ onSelect }) => (
  <div className="timeframe-selector">
    <button className="timeframe-button" onClick={() => onSelect('daily')}>Daily</button>
    <button className="timeframe-button" onClick={() => onSelect('weekly')}>Weekly</button>
    <button className="timeframe-button" onClick={() => onSelect('monthly')}>Monthly</button>
  </div>
);

export default TimeframeSelector;
