'use client';
import { useEffect, useState } from 'react';
import PeopleChart from './PeopleChart';
import TimeSpentChart from './TimeSpentChart';
import AisleActivity from './AisleActivity';
import HeatmapComponent from './HeatmapComponent';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="card"><PeopleChart stats={data.stats} /></div>
      <div className="card"><HeatmapComponent heatPoints={data.heatPoints} /></div>
      <div className="card"><TimeSpentChart avgTime={data.stats?.avg_time} /></div>
      <div className="card"><AisleActivity stats={data.stats} /></div>
    </div>
  );
}
