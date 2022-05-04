var re={};

re.success=function (res,code="200"){
    return{
        code: code,
        result: res,
        msg:"success"
    }
}

re.fail=function (msg,code="400"){
    return{
        code:code,
        result: {},
        msg:msg
    }
}
re.Run=function (req,res,f){
    res.setHeader('Content-Type', 'application/json');
    f(req,res)
        .then(x=>{res.json(re.success(x));  })
        .catch(x=>{res.json(re.fail(x));})
}
module.exports=re;