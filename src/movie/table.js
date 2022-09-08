const {DataTypes} = require("sequelize")
const {sequelize} = require ("../db/connection")

const Movie = sequelize.define ("Movie",{                  // defining table structure, its an sql method
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor:{
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
    },
});

module.exports = Movie