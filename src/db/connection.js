require("dotenv").config()                                // requiring.env
const {Sequelize} = require("sequelize")                  // requiring sequelize

exports.sequelize = new Sequelize(process.env.MYSQL_URI)  // connecting to db with sql link hidden