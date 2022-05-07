const result = require("../mode_js/result");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let l= req.body.electricity_consumption;
    re=l*0.31;
    return re;
}

module.exports = router;
