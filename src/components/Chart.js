// src/components/Chart.js
import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { toPng } from 'html-to-image';
import data from '../data/data.json';
import '../styles/Chart.css';

const Chart = ({ timeframe }) => {
  const [filteredData, setFilteredData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const filterData = () => {
      let filtered;
      switch (timeframe) {
        case 'weekly':
          filtered = data.filter((item, index) => index % 7 === 0);
          break;
        case 'monthly':
          filtered = data.filter((item, index) => index % 30 === 0);
          break;
        case 'daily':
        default:
          filtered = data;
      }
      setFilteredData(filtered);
    };
    filterData();
  }, [timeframe]);

  const handleExport = () => {
    toPng(chartRef.current).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'chart.png';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="chart-container">
      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredData}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="value" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button className="chart-button" onClick={handleExport}>Export as PNG</button>

    </div>
  );
};

export default Chart;
