const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// tout retirer
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// retirer 1 seul
// Todo.findOneAndRemove().then((todo) => {});
//
// // retirer par l'id
// Todo.findByIdAndRemove('59b295d50c9cfa541985c145').then((todo) => {
//   console.log(todo);
// });
