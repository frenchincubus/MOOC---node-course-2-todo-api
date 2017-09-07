// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw new Error('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').findOneAndUpdate({
//   _id: ObjectID("59b015c1c4446876e56a6130")
// }, {
//   $set: {
//     location: 'Sussex'
//   }
// }, {
//   returnOriginal : false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: ObjectID("59b112fc445c79a8ca8ead5e")
}, {
  $set: {
    name: "Cheetah"
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
