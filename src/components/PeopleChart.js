import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PeopleChart({ stats }) {
  // Sample chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "People In",
        data: [1230, 1250, 1240, 1260, 1270, 1280, 1300], // Adjust with real data
        borderColor: "rgba(0, 255, 174, 1)",
        backgroundColor: "rgba(0, 255, 174, 0.2)",
        fill: true,
      },
      {
        label: "People Out",
        data: [1150, 1160, 1155, 1170, 1180, 1190, 1200], // Adjust with real data
        borderColor: "rgba(255, 77, 77, 1)",
        backgroundColor: "rgba(255, 77, 77, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="people-chart-container">
      <h2>People In/Out</h2>
      <div className="metrics">
        <div className="metric">
          <div className="value">{stats?.people_in}</div>
          <div className="label">People In</div>
          <div className="percent">{stats?.people_in_percentage}</div>
        </div>
        <div className="metric">
          <div className="value">{stats?.people_out}</div>
          <div className="label">People Out</div>
          <div className="percent">{stats?.people_out_percentage}</div>
        </div>
      </div>
      <div className="chart-container">
        <Line data={data} />
      </div>
    </div>
  );
}
