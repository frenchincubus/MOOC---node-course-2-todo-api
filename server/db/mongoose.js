var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

process.env.MONGODB_URI = 'mongodb://root:root@ds145283.mlab.com:45283/todos';

mongoose.connect( process.env.MONGODB_URI , { useMongoClient : true });
// si une adresse est créée à l'intérieur de l'hébergeur : process.env.MONGODB_URI

module.exports = {
  mongoose: mongoose
};
