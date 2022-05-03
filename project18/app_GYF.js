const registerRouter = require("./routes/registerPage");
const aboutRouter = require("./routes/aboutPage");
const countryDetailRouter = require("./routes/countryDetailPage");
function Load(app) {
    app.use('/registerPage', registerRouter);
    app.use('/aboutPage', aboutRouter);
    app.use('/countryDetailPage', countryDetailRouter);
}
module.exports=Load