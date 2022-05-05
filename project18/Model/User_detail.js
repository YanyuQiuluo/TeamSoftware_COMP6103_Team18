const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = sequelize.define(
    'user',
    {
            user_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true // 对postgres来说会自动转为 SERIAL
            },
        user_full_name: Sequelize.STRING,
        username: Sequelize.STRING,
        // password: Sequelize.STRING,
        telephone: Sequelize.STRING,
        address_first_line: Sequelize.STRING,
        street_name: Sequelize.STRING,
        city: Sequelize.STRING,
        country: Sequelize.STRING,
        postcode: Sequelize.STRING,
        user_type: Sequelize.STRING,
        feul_usage_pm: Sequelize.STRING,
        electicity_usage_pm: Sequelize.STRING,
    },
    { timestamps: false }
)

module.exports = UserModel;