const { sequelize, DataTypes } = require( 'sequelize');
const db = require('../config/database');


const Testdb = db.define('testdb', {
    firstName : {
        type : DataTypes.STRING,
        allownull :false
    },
    lastName : {
        type : DataTypes.STRING,
        allownull :false
    }
  
    
});

(async () => {
await Testdb.sync();
console.log("The table for the User model was just (re)created!");
})();

// Testdb.sync();
module.exports = Testdb;