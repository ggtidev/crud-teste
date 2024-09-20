//log 20:22 sequelize (Facilita subida ao banco)
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profissional = sequelize.define('Profissional', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  crm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hiringDate: {
    type: DataTypes.DATE, 
    allowNull: true   
  },
  startTime: {
    type: DataTypes.STRING, 
    allowNull: true
  },
  endTime: {
    type: DataTypes.STRING, 
    allowNull: true
  }
}, {
  timestamps: false 
});

module.exports = Profissional;
