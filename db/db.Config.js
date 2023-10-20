import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host: 'containers-us-west-71.railway.app',
  user:  'root',
  password:  'W4sHiD0gjMXQtvxr3YIK',
  database:  'railway',
  port: 5472
})

export default db;