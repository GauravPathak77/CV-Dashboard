import Database from 'better-sqlite3';
const db = new Database('store-data.db');

// For demo purpose: create dummy tables and data
db.prepare(`CREATE TABLE IF NOT EXISTS traffic (
  id INTEGER PRIMARY KEY,
  x INTEGER,
  y INTEGER,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS stats (
  people_in INTEGER,
  people_out INTEGER,
  avg_time TEXT,
  aisle_3 INTEGER,
  aisle_7 INTEGER,
  aisle_5 INTEGER,
  aisle_1 INTEGER
)`).run();

export default db;
