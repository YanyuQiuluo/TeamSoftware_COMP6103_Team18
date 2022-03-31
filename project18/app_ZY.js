const registerRouter = require("./routes/register");
const verifyRouter = require("./routes/register");
const countrylistRouter = require("./routes/countrylist");
// const rankedcountrylistRouter = require("./routes/rankedcountrylist");
const automailer = require("./mode_js/automailer");


function Load(app) {
    app.use('/register', registerRouter);
    app.use('/register', verifyRouter);
    app.use('/countrylist', countrylistRouter);
    // app.use('/rankedcountrylist', rankedcountrylistRouter);
    //const automailer = require("./mode_js/automailer");

    /*var mail = {
        // sender
        from: 'SunlightCommunity18@gmail.com',
        // subject
        subject: 'Welcome to SunlightCommunity',
        // receiver
        to:'604271396@qq.com',//comes from front end
        // content of the email;
        text: 'This message comes from nodejs.'
    };*/

    //automailer(mail);

}
module.exports=Load