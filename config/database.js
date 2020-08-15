const Sequelize = require('sequelize');

//db connnection
const sequelize = new Sequelize('testdb', 'postgres', '8085', {
    host: 'localhost',
    dialect: 'postgres'
  });

  async function connectdb() {
  try {
   await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectdb();
  
module.exports = sequelize;