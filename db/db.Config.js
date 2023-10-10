import mysql from 'mysql'
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host: 'localhost',
  user:  'root',
  password:  'root',
  database:  'egx',
})

export default db;