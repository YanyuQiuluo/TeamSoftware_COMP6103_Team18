var re={}
var dic={}


re.onLogIn=function  (user){
    var key=Math.floor(Math.random()*100000000000);
    while(dic[key]!=undefined){
        key+=1;
    }
    dic[key]=user;

    return key;
};

re.TokenToUser=function (tokne){
return dic[tokne];
};


module.exports=re;