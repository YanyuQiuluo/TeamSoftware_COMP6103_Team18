const automailer = require('nodemailer');

//Set the parameters for the smtp server
const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'SunlightCommunity18@gmail.com',
        pass: 'Sunlight18!'
    }
};
// Set the config of server
const server = automailer.createTransport(config);

// Send email
module.exports = function (mail){
    server.sendMail(mail, function(error, info){
        if(error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });
};