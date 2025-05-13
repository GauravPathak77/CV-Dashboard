import './globals.css';
import HeatmapCanvas from '@/components/HeatmapCanvas';

export default function Dashboard() {
  const mockPoints = [
    { x: 100, y: 100, intensity: 0.8 },
    { x: 120, y: 150, intensity: 0.7 },
    { x: 200, y: 200, intensity: 0.9 },
    { x: 300, y: 100, intensity: 0.6 },
    { x: 250, y: 180, intensity: 1 },
    { x: 180, y: 120, intensity: 0.5 },
  ];

  return (
    <div className="dashboard-container">
      <div className="card">
        <h2>People In/Out</h2>
        <p className="metric">In: 1,243</p>
        <p className="metric">Out: 1,170</p>
      </div>

      <div className="card">
        <h2>Store Traffic</h2>
        <HeatmapCanvas width={400} height={250} points={mockPoints} />
      </div>

      <div className="card">
        <h2>Average Time Spent</h2>
        <p className="metric">14m 32s</p>
      </div>

      <div className="card">
        <h2>Aisle Activity</h2>
        <div className="chart-bar"><div className="label">Aisle 3</div><div className="bar red" style={{ width: '90%' }}></div></div>
        <div className="chart-bar"><div className="label">Aisle 7</div><div className="bar orange" style={{ width: '70%' }}></div></div>
        <div className="chart-bar"><div className="label">Aisle 5</div><div className="bar yellow" style={{ width: '50%' }}></div></div>
        <div className="chart-bar"><div className="label">Aisle 1</div><div className="bar green" style={{ width: '30%' }}></div></div>
      </div>
    </div>
  );
}
