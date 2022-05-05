const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'transaction',
    {
            dataTime:Sequelize.TIME,
            transfer_amount: Sequelize.DOUBLE,
            panel_amount:Sequelize.DOUBLE,
            country_name: Sequelize.name,
            user_name:Sequelize.name,
            status:Sequelize.name,
            uuid:Sequelize.name
    },
    { timestamps: false }
)

module.exports = country;