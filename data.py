import sqlite3
from datetime import datetime

# Connect to SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('store-data.db')
cursor = conn.cursor()

# Create 'traffic' table if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS traffic (
    id INTEGER PRIMARY KEY,
    x INTEGER,
    y INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)
''')

# Create 'stats' table if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS stats (
    people_in INTEGER,
    people_out INTEGER,
    avg_time TEXT,
    aisle_3 INTEGER,
    aisle_7 INTEGER,
    aisle_5 INTEGER,
    aisle_1 INTEGER
)
''')

# Insert some dummy data into 'traffic' table
traffic_data = [
    (1, 50, 100, datetime.now()),
    (2, 60, 150, datetime.now()),
    (3, 40, 120, datetime.now()),
    (4, 80, 200, datetime.now()),
]

cursor.executemany('''
INSERT INTO traffic (id, x, y, timestamp)
VALUES (?, ?, ?, ?)
''', traffic_data)

# Insert some dummy data into 'stats' table
stats_data = (120, 80, '5 minutes', 30, 40, 50, 60)

cursor.execute('''
INSERT INTO stats (people_in, people_out, avg_time, aisle_3, aisle_7, aisle_5, aisle_1)
VALUES (?, ?, ?, ?, ?, ?, ?)
''', stats_data)

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Dummy data inserted successfully into 'store-data.db'")
