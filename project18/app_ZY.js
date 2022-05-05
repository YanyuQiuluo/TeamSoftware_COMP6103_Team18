const registerRouter = require("./routes/register");
const verifyRouter = require("./routes/register");
const countrylistRouter = require("./routes/countrylist");
const userPageRouter = require("./routes/userPage");
const paypalRouter = require("./routes/paypal_start");
// const rankedcountrylistRouter = require("./routes/rankedcountrylist");
const automailer = require("./mode_js/automailer");
const countrylistRouter_ = require("./routes/countrylist_");
const userPageRouter_ = require("./routes/userPage_");
const verifyRouter_ = require("./routes/register_");

function Load(app) {
    app.use('/register', registerRouter);
    app.use('/register', verifyRouter);
    app.use('/countrylist', countrylistRouter_);
    app.use('/userPage', userPageRouter_);
    app.use('/paypal_start', paypalRouter);

}
module.exports=Load