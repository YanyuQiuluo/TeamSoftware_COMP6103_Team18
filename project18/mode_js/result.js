var re={};

re.success=function (res,code="200"){
    return{
        result: res,
        msg:"success",
        code: code

    }
}

re.fail=function (msg,code="400"){
    return{
        result: {},
        msg:msg,
        code:code
    }
}
module.exports=re;