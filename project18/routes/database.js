const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const connection = mysql.createConnection({
    host: 'localhost',
    database: '6103project',
    user: 'root',
    password: '234567891'

});

module.exports = connection;