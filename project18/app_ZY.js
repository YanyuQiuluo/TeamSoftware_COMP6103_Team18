const registerRouter = require("./routes/register");
const verifyRouter = require("./routes/register");
const countrylistRouter = require("./routes/countrylist");
const userPageRouter = require("./routes/userPage");
const paypalRouter = require("./routes/paypal_start");
// const rankedcountrylistRouter = require("./routes/rankedcountrylist");
const automailer = require("./mode_js/automailer");


function Load(app) {
    app.use('/register', registerRouter);
    app.use('/register', verifyRouter);
    app.use('/countrylist', countrylistRouter);
    app.use('/userPage', userPageRouter);
    app.use('/paypal_start', paypalRouter);

}
module.exports=Load