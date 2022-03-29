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

 Date: 29/03/2022 11:36:39
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
    "country_id": "123",
    "country_name": "Tanzania",
    gdp: "62.41",
    "carbon_emissions": "0.21",
    "price_of_solar_panel": "500",
    savings: "0",
    "country_image": null
} ]);
db.getCollection("country").insert([ {
    _id: ObjectId("6242de8e9c6f0000d4001871"),
    "carbon_emissions": 0.36,
    "country_id": 456,
    "country_image": null,
    "country_name": "Kenya",
    gdp: 98.84,
    "price_of_solar_panel": 600,
    savings: 100
} ]);
db.getCollection("country").insert([ {
    _id: ObjectId("6242de909c6f0000d4001872"),
    "carbon_emissions": 0.15,
    "country_id": 789,
    "country_image": null,
    "country_name": "Ethiopia",
    gdp: 107.6,
    "price_of_solar_panel": 550,
    savings: 320
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
    savings: "50",
    "household_id": "222",
    "feul_usage_pm": "106",
    "electicity_usage_pm": "90"
} ]);
db.getCollection("household").insert([ {
    _id: ObjectId("6242de9f9c6f0000d4001873"),
    "electicity_usage_pm": 80,
    "feul_usage_pm": 40,
    "household_id": 333,
    savings: 0
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
    dataTime: "2022-03-21 06:29:00",
    amount: "50",
    "country_id": "123",
    "user_id": "222"
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
    "user_id": "111",
    "user_full_name": "Arwa Alfitni",
    username: "AF",
    password: "1234",
    telephone: "07375100804",
    "address_first_line": "flat 80",
    "street_name": "1 first street",
    city: "Sheffield",
    country: "united kingdom",
    postcode: "a12 3bc",
    userType: "admin"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("6242dd929c6f0000d400186e"),
    "address_first_line": null,
    city: "Leeds",
    country: "United Kingdom",
    password: 56789,
    postcode: "x1 2YZ",
    "street_name": "16 Queen Street",
    telephone: 77712345,
    "user_full_name": "Jonh Smith",
    "user_id": 222,
    username: 0,
    userType: "household"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("6242dd939c6f0000d400186f"),
    "address_first_line": null,
    city: "York",
    country: "United Kingdom",
    password: 120120,
    postcode: "m1 2np",
    "street_name": "123 Second Street",
    telephone: 77665544,
    "user_full_name": "Sara King",
    "user_id": 333,
    username: 0,
    userType: "household"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("6242dd939c6f0000d4001870"),
    "address_first_line": "flat 12",
    city: "Sheffield",
    country: "United Kingdom",
    password: 98765,
    postcode: "a13 3jk",
    "street_name": "40 Garden Street",
    telephone: "077889900",
    "user_full_name": "Edward XYZ",
    "user_id": 444,
    username: 0,
    userType: "staff"
} ]);
