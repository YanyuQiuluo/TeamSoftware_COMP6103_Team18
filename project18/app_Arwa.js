//connect to the Database
function Load(app) {
    const mysql = require('mysql');
    const express = require('express');
    const session = require('express-session');
    const path = require('path');

    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'sunlight'
    });

    const webApp = express();

    webApp.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    webApp.use(express.json());
    webApp.use(express.urlencoded({ extended: true }));
    webApp.use(express.static(path.join(__dirname, 'static')));


    //upload login page and data handing with the server
    //login();

}
module.exports=Load
function country_list_query() {

    // http://localhost:3000/
    webApp.get('/', function(request, response) {
        // Render login template
        response.sendFile(path.join(__dirname + '/ArwaTest.html'));
    });

// http://localhost:3000/auth
     webApp.post('/auth', function(request, response) {

        // Execute SQL query that'll select the account from the database based on the specified username and password
        var sql = "SELECT * FROM country";
        connection.query(sql, function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the list exists
            if (results.length > 0) {
                // Authenticate the user
                request.session.loggedin = true;
                request.session.username = username;
            } else {
                    response.send('list is empty');
            }
            response.end();

        });


    });

    // http://localhost:3000/home
    webApp.get('/home', function(request, response) {
        // If the user is loggedin
        if (request.session.) {
            // Output username
            response.send('Welcome back, ' + request.session.+ '!');
        } else {
            // Not logged in
            response.send('Please login to view this page!');
        }
        response.end();
    });*/

    webApp.listen(3000);
}
function login(){

    // http://localhost:3000/
    webApp.get('/', function(request, response) {
        // Render login template
        response.sendFile(path.join(__dirname + '/loginTest.html'));
    });

// http://localhost:3000/auth
    webApp.post('/auth', function(request, response) {
        // Capture the input fields
        let username = request.body.username;
        let password = request.body.password;
        // Ensure the input fields exists and are not empty
        if (username && password) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (results.length > 0) {
                    // Authenticate the user
                    request.session.loggedin = true;
                    request.session.username = username;
                    // Redirect to home page
                    response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }
                response.end();
            });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    });

    // http://localhost:3000/home
    webApp.get('/home', function(request, response) {
        // If the user is loggedin
        if (request.session.loggedin) {
            // Output username
            response.send('Welcome back, ' + request.session.username + '!');
        } else {
            // Not logged in
            response.send('Please login to view this page!');
        }
        response.end();
    });

    webApp.listen(3000);

}