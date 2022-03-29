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

 Date: 29/03/2022 11:19:29
*/


// ----------------------------
// Collection structure for country
// ----------------------------
db.getCollection("country").drop();
db.createCollection("country");

// ----------------------------
// Documents of country
// ----------------------------
db.getCollection("country").insert([ {
    _id: ObjectId("6242dcee9c6f0000d400186a"),
    "country_id": "-",
    "country_name": "-",
    gdp: "-",
    "carbon_emissions": "-",
    "price_of_solar_panel": "-",
    savings: "-",
    "country_image": "-"
} ]);

// ----------------------------
// Collection structure for household
// ----------------------------
db.getCollection("household").drop();
db.createCollection("household");

// ----------------------------
// Documents of household
// ----------------------------
db.getCollection("household").insert([ {
    _id: ObjectId("6242dcf39c6f0000d400186b"),
    savings: "-",
    "household_id": "-",
    "feul_usage_pm": "-",
    "electicity_usage_pm": "-"
} ]);

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
// Documents of qqq.chunks
// ----------------------------

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
// Documents of qqq.files
// ----------------------------

// ----------------------------
// Collection structure for transaction
// ----------------------------
db.getCollection("transaction").drop();
db.createCollection("transaction");

// ----------------------------
// Documents of transaction
// ----------------------------
db.getCollection("transaction").insert([ {
    _id: ObjectId("6242dcf79c6f0000d400186c"),
    dataTime: "-",
    amount: "-",
    "country_id": "-",
    "user_id": "-"
} ]);

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------
db.getCollection("user").insert([ {
    _id: ObjectId("6242dcfc9c6f0000d400186d"),
    "user_id": "-",
    "user_full_name": "-",
    username: "-",
    password: "-",
    telephone: "-",
    "address_first_line": "-",
    "street_name": "-",
    city: "-",
    country: "-",
    postcode: "-",
    userType: "-"
} ]);
