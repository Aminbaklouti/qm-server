const fs = require('fs');
const path = require('path');
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
});

const db = {};
fs.readdirSync(__dirname)
  .filter((file) => 
    file != 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })


db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;
