import { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';

export default function HeatmapComponent({ heatPoints }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && heatPoints) {
      const heatmapInstance = h337.create({
        container: ref.current,
        radius: 40,
        maxOpacity: 0.6,
        minOpacity: 0,
        blur: 0.85,
      });

      heatmapInstance.setData({
        max: 10,
        data: heatPoints.map((p) => ({ x: p.x, y: p.y, value: 1 })),
      });
    }
  }, [heatPoints]);

  return (
    <>
      <h2>Store Traffic</h2>
      <div
        ref={ref}
        style={{ width: '100%', height: 300, position: 'relative', borderRadius: '12px' }}
      />
    </>
  );
}
