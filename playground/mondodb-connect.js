// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = { name: 'lionel', age: 35};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw new Error('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do ',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Todos').insertOne({
  //   name: 'Lionel',
  //   age: 35,
  //   location: 'Famars'
  // }, (err, result) => {
  //   if (err) {
  //     throw new Error('Unable to insert todo', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
