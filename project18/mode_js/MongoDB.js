const mg= require('mongoose');
const MongoClient = require('mongoose').mongo.MongoClient;
const url = "mongodb://localhost:27017/sunlight";
re={}
// re.sunlight= function ()
// {
//    return  MongoClient.connect(url)
// }
re.table=function (CollectionName,db){
   return  MongoClient.connect(url)
       .then(x=>{db.db=x; return  x.db().collection(CollectionName)});
}

module.exports=re;