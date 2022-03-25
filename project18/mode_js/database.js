const mysql = require('mysql');
let a=0;
a=a+1;
console.log("load DB"+a);
// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'sunlight',
    user: 'root',
    password: '234567891'

});

module.exports = connection;