export default function AisleActivity({ stats }) {
  const getColor = (value) => {
    if (value > 80) return 'red';
    if (value > 60) return 'orange';
    if (value > 40) return 'yellow';
    return 'green';
  };

  return (
    <>
      <h2>Aisle Activity</h2>
      {['aisle_3', 'aisle_7', 'aisle_5', 'aisle_1'].map((aisle) => (
        <div key={aisle} className="chart-bar">
          <span className="label">{aisle.replace('_', ' ').toUpperCase()}</span>
          <div
            className={`bar ${getColor(stats?.[aisle])}`}
            style={{ width: `${stats?.[aisle]}%` }}
          />
        </div>
      ))}
    </>
  );
}
