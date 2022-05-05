const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'transaction',
    {
            dataTime:Sequelize.TIME,
            amount: Sequelize.DOUBLE,
            country_name: Sequelize.name,
            user_name:Sequelize.name,
            status:Sequelize.name
    },
    { timestamps: false }
)

module.exports = country;