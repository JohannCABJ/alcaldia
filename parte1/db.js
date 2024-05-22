// db.js
const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alcaldiaibague',
  database: 'users'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    process.exit(1);
  }
  console.log('1.Conectado a la base de datos MySQL!');
});

connection.query = util.promisify(connection.query);

module.exports = connection;