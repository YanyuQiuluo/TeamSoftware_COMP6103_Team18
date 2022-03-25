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
module.exports = function (rec_address){

    var mail = {
        // sender
        from: 'SunlightCommunity18@gmail.com',
        // subject
        subject: 'Verification code',
        // receiver
        to:rec_address,//comes from front end
        // content of the email;
        text: veri_code+' is your verification code.'
    };

    server.sendMail(mail, function(error, info){
        if(error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });

    veri_code(){
        var Num="";
        for(var i=0;i<6;i++)
        {
            Num+=Math.floor(Math.random()*10);
        }
        return Num;
    }

};