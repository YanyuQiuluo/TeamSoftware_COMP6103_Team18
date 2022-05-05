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
        gdp: Sequelize.DOUBLE,
        carbon_emissions:Sequelize.DOUBLE,
        price_of_solar_panel:Sequelize.DOUBLE,
        savings:Sequelize.DOUBLE,
        country_image:Sequelize.TEXT

    },
    { timestamps: false }
)

module.exports = country;