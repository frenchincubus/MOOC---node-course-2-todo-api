const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b15c823bddd063a02fdd86';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });


// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e));

var id = '59b14237ed5ce44bda32eed3';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('user not found');
  }
  console.log('user', user);
}).catch((e) => console.log(e));
