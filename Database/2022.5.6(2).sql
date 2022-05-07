/*
 Navicat MySQL Data Transfer

 Source Server         : qqq
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : sunlight

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 06/05/2022 20:39:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries`  (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gdp` double NOT NULL,
  `carbon_emissions` double NOT NULL,
  `price_of_solar_panel` double NOT NULL,
  `savings` double NOT NULL,
  `country_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `country_description` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`country_id`) USING BTREE,
  UNIQUE INDEX `name_UNIQUE`(`country_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 790 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of countries
-- ----------------------------
INSERT INTO `countries` VALUES (123, 'Tanzania', 62.41, 0.21, 500, 0, 'https://cdn.britannica.com/20/20-004-EB20A026/Flag-Tanzania.jpg', 'Tanzania is a country in East Africa within the African Great Lakes region. Only 15 per cent of Tanzanians had access to electric power in 2011, however rising to 35.2 per cent in 2018.In 2013, 49.7 per cent of Tanzania\'s electricity generation came from natural gas, 28.9 per cent from hydroelectric sources, 20.4 per cent from thermal sources, and 1.0 percent from outside the country.');
INSERT INTO `countries` VALUES (456, 'Kenya', 98.84, 0.36, 600, 100, 'https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg', 'Kenya has one of the highest household solar ownership rates in the world. More Kenyans are turning to solar power due to relatively high connectivity costs to the grid and the abundance of solar power in Kenya. Solar photovoltaic systems are particularly prevalent among rural households with limited access to grid electricity. They are sold to users in Kenya through a competitive free market network and are commonly used for solar water pumping, solar irrigation, and cold storage. More factories are installing solar panels on their rooftops to counter the high cost and instability of grid electricity. Under the Value Added Tax (VAT) Act 2013, the VAT Amendment Act 2014, and the Finance Act 2018, the Kenyan government agreed to remove import duty and zero-rated VAT for renewable energy equipment and accessories. \nTo achieve the renewable energy goals set forth in “Vision 2030,” the Kenyan government has launched several solar energy projects, of which the Garissa Solar Power Plant has substantially reduced energy costs in Kenya and has become the largest solar power plant in East and Central Africa.');
INSERT INTO `countries` VALUES (789, 'Ethiopia', 107.6, 0.15, 550, 320, 'https://cdn.countryflags.com/thumbs/ethiopia/flag-800.png', 'In 2011, over 96% of Ethiopia\'s electricity was from hydropower. The country began a large program to expand its electricity supply in the 2010s from 2,000 MW to 10,000 MW. This was to be done mainly with renewable sources. Wind and geothermal were included to offset seasonal differences in water levels. Ethiopia plans to export electricity to neighboring countries, but transmission lines will need to be upgraded and expanded.\nMost of the energy needs of Ethiopia are filled by biofuels for cooking, heating, and off-grid lighting. Petroleum, including gasoline, diesel, and kerosene supply less than 7% of the country\'s energy supply. Solar photovoltaics is being promoted to replace fuel-based lighting and off-grid electrical supply with a solar panel assembly plant opening in Addis Ababa in early 2013. The majority of Ethiopia\'s population lives in rural areas and very few have access to electricity.\nEthiopia is planning for a carbon-neutral status by 2025. \nThis aim was set through their ambitious three-stage Growth and Transformation Plan, Ethiopia seeks to transform itself into a modern economy by 2025. According to the Ministry of Water and Energy, as of 2018, only 23% of the national populace has access to grid electricity. That figure falls even further to 10% when moving to rural areas – a figure that\'s smaller than the 17% average found across the rest of Africa. Drought frequency, flooding, poor land management techniques, and a rapidly growing population all have increased the situation’s direness. As of 2018, Ethiopia had launched the National Electrification Program which aimed for 65% of the population to be grid-connected by 2025. ');

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `dataTime` date NOT NULL,
  `transfer_amount` double NOT NULL,
  `panel_amount` int NOT NULL,
  `status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `uuid` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `country_id` int NOT NULL,
  `user_id` int NOT NULL,
  `start_time` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `end_time` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `countryID_idx`(`country_id`) USING BTREE,
  INDEX `user_transaction_idx`(`user_id`) USING BTREE,
  CONSTRAINT `country_transaction` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_transaction` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of transactions
-- ----------------------------
INSERT INTO `transactions` VALUES (1, '2022-05-06', 500, 2, 'success', '1234546', 123, 111, NULL, NULL);
INSERT INTO `transactions` VALUES (2, '2022-05-05', 25, 1, 'pending', '234567891', 123, 444, NULL, NULL);
INSERT INTO `transactions` VALUES (3, '2022-05-06', 300, 1, 'success', '564582', 456, 111, NULL, NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telephone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_first_line` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `street_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `country` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `postcode` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `feul_usage_pm` double NULL DEFAULT NULL,
  `electicity_usage_pm` double NULL DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 445 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (111, 'Arwa Alfitni', 'AF', '1234', '07375100804', 'flat 80', '1 first street', 'Sheffield', 'united kingdom', 'a12 3bc', 'admin', NULL, NULL, NULL);
INSERT INTO `users` VALUES (222, 'Jonh Smith', 'JS123', '56789', '077712345', NULL, '16 Queen Street', 'Leeds', 'United Kingdom', 'x1 2YZ', 'household', NULL, NULL, NULL);
INSERT INTO `users` VALUES (333, 'Sara King', 'SK123', '120120', '077665544', NULL, '123 Second Street', 'York', 'United Kingdom', 'm1 2np', 'household', NULL, NULL, NULL);
INSERT INTO `users` VALUES (444, 'Edward XYZ', 'EX2022', '98765', '077889900', 'flat 12', '40 Garden Street', 'Sheffield', 'United Kingdom', 'a13 3jk', 'staff', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
