var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb://root:root@ds145283.mlab.com:45283/todos';

mongoose.connect( url || 'mongodb://localhost:27017/TodoApp', { useMongoClient : true });
// si une adresse est créée à l'intérieur de l'hébergeur : process.env.MONGODB_URI

module.exports = {
  mongoose: mongoose
};
