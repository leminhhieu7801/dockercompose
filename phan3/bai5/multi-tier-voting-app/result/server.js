// result/server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();

const db = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'votes'
});

app.get('/', async (req, res) => {
  const result = await db.query('SELECT vote, COUNT(*) FROM votes GROUP BY vote');
  res.send(result.rows);
});

app.listen(80, () => console.log('Result app running on port 80'));
