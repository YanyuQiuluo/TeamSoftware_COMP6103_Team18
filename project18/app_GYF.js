const registerRouter = require("./routes/registerPage");
const aboutRouter = require("./routes/aboutPage");
const countryDetailRouter = require("./routes/countryDetailPage");
const basketRouter = require("./routes/basketPage");
const paymentResultRouter = require("./routes/paymentResultPage");
function Load(app) {
    app.use('/registerPage', registerRouter);
    app.use('/aboutPage', aboutRouter);
    app.use('/countryDetailPage', countryDetailRouter);
    app.use('/basketPage', basketRouter);
    app.use('/paymentResultPage', paymentResultRouter);
}
module.exports=Load