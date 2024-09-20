const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_profissionais', 'postgres', 'trocar', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
