// // m= require("./MongoDB");
// // const fs=require("fs");
// //
// // fs.readFile("mode_js/sunlight.js",'utf-8',
// //     (e,s)=>{
// //     if(e){console.log(e);return;}
// //     m.sunlight()
// //         .then(x=>{
// //             let db= x.db();
// //             db.
// //             eval(s);
// //         })
// //
// // });
//
//
// var process = require('child_process');
// var path = require("path");
// var real_path= path.resolve('./')+"\\";
// console.log("real path :"+real_path);
//
// // process.exec("start "+real_path+"RunDB.bat",
// //     function(error, stdout, stderr){
// //     if(error)console.log("error: "+error);
// //     if(stdout)console.log("stdout: "+stdout);
// //     if(stderr)console.log("stderr: "+stderr);
// //     } );
// const iconv = require("iconv-lite");
// const encoding          = 'utf-8';
// const binaryEncoding    = 'binary';
// function iconvDecode(str = '') {
//     return iconv.decode(Buffer.from(str, binaryEncoding), encoding);
// }
// process.exec("mongo 127.0.0.1:27017/sunlight sunlight.js",
//     function(error, stdout, stderr){
//         if(error)console.log("error: "+iconvDecode(error.message));
//         if(stdout)console.log("stdout: "+iconvDecode(stdout));
//         if(stderr)console.log("stderr: "+iconvDecode(stderr));
//     } );
//
// module.exports={}