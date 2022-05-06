const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'country',
    {
            country_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true // 对postgres来说会自动转为 SERIAL
            },
        country_name: Sequelize.STRING,
    },
    { timestamps: false }
)

module.exports = country;