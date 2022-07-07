const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.db'
});

module.exports = sequelize