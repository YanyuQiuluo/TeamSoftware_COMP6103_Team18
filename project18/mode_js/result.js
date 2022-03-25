var re={};

re.suc=function (res,code="200"){
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
module.exports=re;