const mg= require('mongoose');
const MongoClient = require('mongoose').mongo.MongoClient;
const url = "mongodb://localhost:27017/sunlight";
re={}
re.sunlight= function ()
{
   return  MongoClient.connect(url)
}
re.table=function (CollectionName,closeDB){
   closeDB.invoke=function (){}
   return  MongoClient.connect(url)
       .then(x=>{
          closeDB.invoke=function (){
             console.log("close db");
             if(x)x.close();
          }
          return  x.db().collection(CollectionName)
       })
}

module.exports=re;