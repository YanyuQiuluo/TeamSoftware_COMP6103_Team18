const registerRouter = require("./routes/registerPage");
function Load(app) {
    app.use('/registerPage', registerRouter);
}
module.exports=Load