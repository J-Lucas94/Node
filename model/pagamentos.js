var db = require('../db/db')
const { Sequelize, DataTypes } = require('sequelize');

const Pagamento = db.define('Pagamento', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.DOUBLE
    // allowNull defaults to true
  },
}, {
  // Other model options go here
});

//db.sync({alter:true})

module.exports = Pagamento