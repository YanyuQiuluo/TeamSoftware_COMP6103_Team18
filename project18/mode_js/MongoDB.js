const MongoClient = require('mongoose').mongo.MongoClient;
const url = "mongodb://localhost:27017/sunlight";

function  sunlight()
{
   return  MongoClient.connect(url)
}

module.exports=sunlight;