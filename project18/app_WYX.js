
var loginRouter = require('./routes/login');
function Load(app) {
    app.use('/login', loginRouter);

}
module.exports=Load