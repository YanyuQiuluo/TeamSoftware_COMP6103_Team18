const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'transaction',
    {
            dataTime:Sequelize.DATE,
            amount: Sequelize.DOUBLE,
            country_id: Sequelize.INTEGER,
            user_id:Sequelize.INTEGER,
    },
    { timestamps: false }
)

module.exports = country;