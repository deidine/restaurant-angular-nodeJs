const  Sequelize = require('sequelize');
const mysqlConnection = require('../db/dbconnect').default;
async function defineUserModel() {
  try {
    const sequelize = await mysqlConnection.sequelize; // Wait for connection
   
module.exports = mysqlConnection.sequelize.define(
  'users', {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fname:{
       type: Sequelize.STRING
      },
    lname:{ 
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
    },
    roles: {
      type: Sequelize.STRING,
    },
    status:{
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }
);
  } catch (error) {
    console.error("Error defining user model:", error);
  }
}

defineUserModel();