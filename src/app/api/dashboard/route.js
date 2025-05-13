import db from '@/lib/db';

export async function GET() {
  const stats = db.prepare('SELECT * FROM stats LIMIT 1').get();
  const heatPoints = db.prepare('SELECT x, y FROM traffic').all();

  return Response.json({ stats, heatPoints });
}
