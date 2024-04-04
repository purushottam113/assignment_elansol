const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

async function connect() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(dbName);
}

module.exports = { connect };
