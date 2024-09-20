const sequelize = require('./config/database');
const User = require('./models/User');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch((error) => {
    console.log('Error syncing database:', error);
  });
