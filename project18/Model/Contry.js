const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const country = sequelize.define(
    'country',
    {
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