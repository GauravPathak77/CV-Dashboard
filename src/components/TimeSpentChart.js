import React, { useState } from "react";

export default function TimeSpentChart() {
  const [data, setData] = useState([
    ['0-5', 20], 
    ['5-10', 50],
    ['10-15', 40],
    ['15-20', 30],
    ['>20', 10]
  ]);

  // Scale factor for making bars taller
  const scaleFactor = 3; // Adjust this multiplier for better visibility

  return (
    <div className="time-spent-chart">
      <h2>Average Time Spent</h2>
      <div className="time-bar-chart">
        {data.map(([label, value], idx) => (
          <div key={idx} className="time-chart-bar">
            <div className="time-bar-container">
              <div
                className="time-bar"
                style={{ height: `${value * scaleFactor}px` }} // Multiply the value for better visibility
              ></div>
            </div>
            <span className="time-label">{label} min</span>
          </div>
        ))}
      </div>
    </div>
  );
}
