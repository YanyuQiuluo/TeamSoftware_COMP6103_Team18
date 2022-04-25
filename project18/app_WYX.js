
var loginRouter = require('./routes/login');
var countryDetail=require('./routes/CountryDetail')
function Load(app) {
    app.use('/login', loginRouter);
    app.use("/country_detail",countryDetail);
}

module.exports=Load