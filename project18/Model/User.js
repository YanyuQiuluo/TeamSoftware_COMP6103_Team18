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

        user_full_name:{type: Sequelize.STRING,defaultValue: ""},
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        user_type: Sequelize.STRING,
        email:{type: Sequelize.STRING,}
    },
    { timestamps: false }
)

module.exports = UserModel;