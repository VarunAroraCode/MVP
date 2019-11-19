const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const port = 3000
const url = 'mongodb://localhost:27017';
const dbName = 'testingMVP';

MongoClient.connect(url, (err, client) => {
  if (err) return console.error(err);
  console.log("connected to the database?");
  const db = client.db('testingMVP');
  const collection = db.collection('test1');
  collection.find({}).toArray((err, docs) => {
    console.log(docs);
  });
});
app.get('/', (req, res) => {
    console.log('receiving get req to server');
    res.send('Hello World!')
})
console.log('this is just for git test');
app.listen(port, () => console.log(`Example app listening on port ${port}!`));