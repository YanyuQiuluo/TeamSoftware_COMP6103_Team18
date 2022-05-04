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

 Date: 04/05/2022 18:04:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gdp` double NULL DEFAULT NULL,
  `carbon_emissions` double NULL DEFAULT NULL,
  `price_of_solar_panel` double NULL DEFAULT NULL,
  `savings` double NULL DEFAULT NULL,
  `country_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_UNIQUE`(`country_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 790 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of countries
-- ----------------------------
INSERT INTO `countries` VALUES (123, 'Tanzania', 62.41, 0.21, 500, 0, NULL);
INSERT INTO `countries` VALUES (456, 'Kenya', 98.84, 0.36, 600, 100, NULL);
INSERT INTO `countries` VALUES (789, 'Ethiopia', 107.6, 0.15, 550, 320, NULL);

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `id` int NOT NULL,
  `dataTime` datetime NOT NULL,
  `amount` double NULL DEFAULT NULL,
  `country_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`dataTime`, `country_id`, `user_id`, `id`) USING BTREE,
  INDEX `countryID_idx`(`country_id`) USING BTREE,
  INDEX `userID_idx`(`user_id`) USING BTREE,
  CONSTRAINT `countryID` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `userID` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transactions
-- ----------------------------
INSERT INTO `transactions` VALUES (0, '2022-03-21 06:29:00', 50, 123, 222);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 445 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (111, 'Arwa Alfitni', 'AF', '1234', '07375100804', 'flat 80', '1 first street', 'Sheffield', 'united kingdom', 'a12 3bc', 'admin', NULL, NULL, NULL);
INSERT INTO `users` VALUES (222, 'Jonh Smith', 'JS123', '56789', '077712345', NULL, '16 Queen Street', 'Leeds', 'United Kingdom', 'x1 2YZ', 'household', NULL, NULL, NULL);
INSERT INTO `users` VALUES (333, 'Sara King', 'SK123', '120120', '077665544', NULL, '123 Second Street', 'York', 'United Kingdom', 'm1 2np', 'household', NULL, NULL, NULL);
INSERT INTO `users` VALUES (444, 'Edward XYZ', 'EX2022', '98765', '077889900', 'flat 12', '40 Garden Street', 'Sheffield', 'United Kingdom', 'a13 3jk', 'staff', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
