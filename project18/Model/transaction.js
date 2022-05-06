const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'transaction',
    {
        dataTime:Sequelize.STRING,
        transfer_amount: Sequelize.DOUBLE,
        panel_amount:Sequelize.INTEGER,
        status:Sequelize.STRING,
        uuid:Sequelize.STRING,
        country_id: Sequelize.INTEGER,
        user_id:Sequelize.INTEGER,
        start_time:Sequelize.STRING,
        end_time:Sequelize.STRING
    },
    { timestamps: false }
)

module.exports = country;