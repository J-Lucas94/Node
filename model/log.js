var db = require('../db/db')
const { Sequelize, DataTypes } = require('sequelize');

const Log = db.define('Log', {
  // Model attributes are defined here
  rota: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

//Log.sync({alter:true})

module.exports = Log