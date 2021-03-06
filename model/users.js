var db = require('../db/db')
const { Sequelize, DataTypes } = require('sequelize');

const User = db.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

// db.sync({alter:true})

module.exports = User