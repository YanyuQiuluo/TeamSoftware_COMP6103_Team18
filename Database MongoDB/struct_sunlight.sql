/*
 Navicat MongoDB Data Transfer

 Source Server         : qqq
 Source Server Type    : MongoDB
 Source Server Version : 50006
 Source Host           : localhost:27017
 Source Schema         : sunlight

 Target Server Type    : MongoDB
 Target Server Version : 50006
 File Encoding         : 65001

 Date: 29/03/2022 11:12:55
*/


// ----------------------------
// Collection structure for country
// ----------------------------
db.getCollection("country").drop();
db.createCollection("country");

// ----------------------------
// Collection structure for household
// ----------------------------
db.getCollection("household").drop();
db.createCollection("household");

// ----------------------------
// Collection structure for qqq.chunks
// ----------------------------
db.getCollection("qqq.chunks").drop();
db.createCollection("qqq.chunks");
db.getCollection("qqq.chunks").createIndex({
    "files_id": NumberInt("1"),
    n: NumberInt("1")
}, {
    name: "files_id_1_n_1",
    unique: true
});

// ----------------------------
// Collection structure for qqq.files
// ----------------------------
db.getCollection("qqq.files").drop();
db.createCollection("qqq.files");
db.getCollection("qqq.files").createIndex({
    filename: NumberInt("1"),
    uploadDate: NumberInt("1")
}, {
    name: "filename_1_uploadDate_1"
});

// ----------------------------
// Collection structure for transaction
// ----------------------------
db.getCollection("transaction").drop();
db.createCollection("transaction");

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");
