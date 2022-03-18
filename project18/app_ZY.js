const registerRouter = require("./routes/register");

function Load(app) {
    app.use('/register', registerRouter);

}
module.exports=Load