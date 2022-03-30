const registerRouter = require("./routes/registerPage");
const aboutRouter = require("./routes/aboutPage");
function Load(app) {
    app.use('/registerPage', registerRouter);
    app.use('/aboutPage', aboutRouter);
}
module.exports=Load