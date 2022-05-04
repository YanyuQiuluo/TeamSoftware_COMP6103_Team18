const sequelize = require("../mode_js/MySql");
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = sequelize.define(
    'user',
    {
        user_full_name: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        user_type: Sequelize.STRING,

    },
    { timestamps: false }
)

module.exports = UserModel;