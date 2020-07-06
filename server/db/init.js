const Sequelize = require('sequelize');
const config = require('config')

if (process.env.NODE_ENV == 'development') {
  module.exports = new Sequelize('pizza_db', 'root', '210310', {
    dialect: 'mysql',
    host: 'localhost',
  });
} else {
  module.exports = new Sequelize(config.get('Database'), config.get('Username'), config.get('Password'), {
    dialect: 'mysql',
    port: config.get('Port'),
    host: config.get('Server')
  });
}
 