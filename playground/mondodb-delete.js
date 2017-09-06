// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw new Error('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMAny
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({
  //   _id : new ObjectID('59b01a1773359479be461824')
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').deleteMany({name: 'Lionel'});


  // db.close();
});
