const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'transaction',
    {
        dataTime:Sequelize.STRING,
        transfer_amount: Sequelize.DOUBLE,
        panel_amount:Sequelize.INTEGER,
        country_name:Sequelize.STRING,
        user_name:Sequelize.STRING,
        status:Sequelize.STRING,
        uuid:Sequelize.STRING,
    },
    { timestamps: false }
)

module.exports = country;