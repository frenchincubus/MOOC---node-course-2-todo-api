var env = process.env.NODE_ENV || 'development';
console.log('env *******', env);

if(env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}


//  process.env.MONGODB_URI = 'mongodb://root:root@ds145283.mlab.com:45283/todos';
