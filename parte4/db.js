//const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const {config} = require('./config')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const url = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}`
const dbName = config.dbName;

let db = null;

async function connect() {
  if (db) return db;
  let client = await MongoClient.connect(url);
  db = client.db(dbName);
  console.log("Conexión a la base de datos establecida con éxito");
  return db;
}

module.exports = { connect };