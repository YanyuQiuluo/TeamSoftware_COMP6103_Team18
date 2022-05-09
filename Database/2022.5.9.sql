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

 Date: 09/05/2022 16:22:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries`  (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `gdp` double NOT NULL DEFAULT 0,
  `carbon_emissions` double NOT NULL DEFAULT 0,
  `price_of_solar_panel` double NOT NULL DEFAULT 0,
  `savings` double NOT NULL DEFAULT 0,
  `country_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `country_description` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `carbon_intensity` double NOT NULL DEFAULT 0,
  `kwh_m2_mon` double NOT NULL DEFAULT 0,
  `carbon_saving_factor` double NOT NULL DEFAULT 0,
  PRIMARY KEY (`country_id`) USING BTREE,
  UNIQUE INDEX `name_UNIQUE`(`country_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 797 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of countries
-- ----------------------------
INSERT INTO `countries` VALUES (100, 'Egypt', 363.1, 2.5, 10135, 0, 'https://icons.iconarchive.com/icons/wikipedia/flags/256/EG-Egypt-Flag-icon.png', 'Egypt contributed 0.67% of annual carbon dioxide emissions, or 329.4 mn tons, in 2018. Despite the efforts made to reduce emissions, they still rely on fossil fuels for 91% of our electricity production (other estimates put the percentage even higher). Like China, they haven’t submitted legally binding targets on cuts as Paris Agreement signatories, but the government has set an ambitious goal of seeing 42% of the country’s electricity generated from renewable sources by 2035.', 423, 166.13, 70.72);
INSERT INTO `countries` VALUES (123, 'Tanzania', 62.41, 0.21, 500, 0, 'https://cdn.britannica.com/20/20-004-EB20A026/Flag-Tanzania.jpg', 'Tanzania is a country in East Africa within the African Great Lakes region. Only 15 per cent of Tanzanians had access to electric power in 2011, however rising to 35.2 per cent in 2018.In 2013, 49.7 per cent of Tanzania\'s electricity generation came from natural gas, 28.9 per cent from hydroelectric sources, 20.4 per cent from thermal sources, and 1.0 percent from outside the country.', 326, 147.85, 48.2);
INSERT INTO `countries` VALUES (456, 'Kenya', 98.84, 0.36, 600, 100, 'https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg', 'Kenya has one of the highest household solar ownership rates in the world. More Kenyans are turning to solar power due to relatively high connectivity costs to the grid and the abundance of solar power in Kenya. Solar photovoltaic systems are particularly prevalent among rural households with limited access to grid electricity. They are sold to users in Kenya through a competitive free market network and are commonly used for solar water pumping, solar irrigation, and cold storage. More factories are installing solar panels on their rooftops to counter the high cost and instability of grid electricity. Under the Value Added Tax (VAT) Act 2013, the VAT Amendment Act 2014, and the Finance Act 2018, the Kenyan government agreed to remove import duty and zero-rated VAT for renewable energy equipment and accessories. \nTo achieve the renewable energy goals set forth in “Vision 2030,” the Kenyan government has launched several solar energy projects, of which the Garissa Solar Power Plant has substantially reduced energy costs in Kenya and has become the largest solar power plant in East and Central Africa.', 245, 151.84, 37.2);
INSERT INTO `countries` VALUES (789, 'Ethiopia', 107.6, 0.15, 550, 320, 'https://cdn.countryflags.com/thumbs/ethiopia/flag-800.png', 'In 2011, over 96% of Ethiopia\'s electricity was from hydropower. The country began a large program to expand its electricity supply in the 2010s from 2,000 MW to 10,000 MW. This was to be done mainly with renewable sources. Wind and geothermal were included to offset seasonal differences in water levels. Ethiopia plans to export electricity to neighboring countries, but transmission lines will need to be upgraded and expanded.\nMost of the energy needs of Ethiopia are filled by biofuels for cooking, heating, and off-grid lighting. Petroleum, including gasoline, diesel, and kerosene supply less than 7% of the country\'s energy supply. Solar photovoltaics is being promoted to replace fuel-based lighting and off-grid electrical supply with a solar panel assembly plant opening in Addis Ababa in early 2013. The majority of Ethiopia\'s population lives in rural areas and very few have access to electricity.\nEthiopia is planning for a carbon-neutral status by 2025. \nThis aim was set through their ambitious three-stage Growth and Transformation Plan, Ethiopia seeks to transform itself into a modern economy by 2025. According to the Ministry of Water and Energy, as of 2018, only 23% of the national populace has access to grid electricity. That figure falls even further to 10% when moving to rural areas – a figure that\'s smaller than the 17% average found across the rest of Africa. Drought frequency, flooding, poor land management techniques, and a rapidly growing population all have increased the situation’s direness. As of 2018, Ethiopia had launched the National Electrification Program which aimed for 65% of the population to be grid-connected by 2025. ', 350, 135.06, 47.27);
INSERT INTO `countries` VALUES (790, 'Mali', 17.39, 0.29, 270, 0, 'http://www.hscentre.org/wp-content/uploads/2022/04/1280px-Flag_of_Mali.svg_-620x330.png', 'In Mali\'s Ségou region, only half of the inhabitants have electricity in their houses. The amount of power produced by the National Energy Company, EDM, is not enough to keep up with the demand. But private companies are making solar panel plants that are changing living conditions in rural Ségou. The small village of Séminbougou is a good example of this growing trend.', 400, 147.575, 59.03);
INSERT INTO `countries` VALUES (791, 'Chad', 10.09, 0.07, 155, 0, 'https://www.kindpng.com/picc/m/388-3883671_flag-of-chad-logo-png-transparent-flag-png.png', 'CO2 emissions, in Chad in 2020, have fallen 0.036 megatons, 4.2% compared to 2019.', 265, 161.3, 42.74);
INSERT INTO `countries` VALUES (792, 'Ghana', 72.35, 0.54, 300, 0, 'https://cdn.countryflags.com/thumbs/ghana/flag-800.png', 'In 2020, CO2 emissions per capita for Ghana was 0.54 tons of CO2 per capita. Before CO2 emissions per capita of Ghana started to increase to reach a level of 0.54 tons of CO2 per capita in 2020, it went through a trough reaching a low of 0.15 tons of CO2 per capita in 1983.', 367, 124.4, 45.65);
INSERT INTO `countries` VALUES (793, 'Nigeria', 432.3, 0.67, 2050, 0, 'https://www.resolfin.com/wp-content/uploads/2018/02/Bandiera-Nigeria-500x252.gif', 'Nigeria’s total GHG emissions in 2014 were 492.44 million metric tons of carbon dioxide equivalent (MtCO2e), totaling 1.01 percent of global GHG emissions. In Nigeria, 38.2 percent of GHG emissions came from the land-use change and forestry sector, followed by the energy, waste, agriculture and the industrial processes sector which contributed 32.6 percent, 14.0, 13.0 percent and 2.1 percent respectively to GHG emissions.', 369, 137.53, 50.75);
INSERT INTO `countries` VALUES (794, 'Senegal', 24.91, 0.62, 700, 0, 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Senegal_%282004_World_Factbook%29.gif?20070821235139', 'Nearly 540,000 people in Senegal will get access to clean and affordable power following the launch of two solar photovoltaic (PV) plants, financed by IFC, the European Investment Bank and Proparco, under the World Bank Group’s Scaling Solar program. Although the proportion of Senegalese people with access to electricity has increased sharply over the past 30 years, nearly a quarter of the population still lacks access. Senegal´s power sector has been historically reliant on costly fuel imports, with about 80 percent of its energy mix being oil-based.', 195, 141.29, 27.55);
INSERT INTO `countries` VALUES (795, 'Cameroon', 39.8, 0.34, 600, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1200px-Flag_of_Cameroon.svg.png?20201114195356', 'In 2020, CO2 emissions for Cameroon was 9.3 million tonnes. CO2 emissions of Cameroon increased from 0.9 million tonnes in 1971 to 9.3 million tonnes in 2020 growing at an average annual rate of 5.99%.', 180, 136.5, 24.57);

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `dataTime` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `transfer_amount` double NOT NULL DEFAULT 0,
  `panel_amount` int NOT NULL DEFAULT 0,
  `status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `uuid` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `country_id` int NOT NULL DEFAULT 0,
  `user_id` int NOT NULL DEFAULT 0,
  `id` int NOT NULL DEFAULT 0,
  `start_time` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `end_time` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `countryID_idx`(`country_id`) USING BTREE,
  INDEX `user_transaction_idx`(`user_id`) USING BTREE,
  CONSTRAINT `country_transaction` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_transaction` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of transactions
-- ----------------------------
INSERT INTO `transactions` VALUES ('2022-05-06 19:17:23', 500, 2, 'success', '1234546', 123, 111, 1, '', '');
INSERT INTO `transactions` VALUES ('2022-05-05 17:56:27', 25, 1, 'pending', '234567891', 123, 444, 2, '', '');
INSERT INTO `transactions` VALUES ('2022-05-03 20:12:06', 300, 3, 'success', '564582', 456, 111, 3, '', '');
INSERT INTO `transactions` VALUES ('2022-04-02 10:02:15', 100, 1, 'success', '22655562', 789, 222, 4, '', '');
INSERT INTO `transactions` VALUES ('2022-05-06 19:17:23', 500, 2, 'success', '1234546', 789, 111, 5, '', '');
INSERT INTO `transactions` VALUES ('2022-04-02 10:02:15', 100, 1, 'success', '22655562', 456, 222, 6, '', '');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telephone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `address_first_line` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `street_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `country` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `postcode` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `user_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `feul_usage_pm` double UNSIGNED NULL DEFAULT 0,
  `electicity_usage_pm` double UNSIGNED NULL DEFAULT 0,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 448 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (111, 'Arwa Alfitni', 'AF', '1234', '07375100804', 'flat 80', '1 first street', 'Sheffield', 'united kingdom', 'a12 3bc', 'admin', 0, 0, '');
INSERT INTO `users` VALUES (222, 'Jonh Smith', 'JS123', '56789', '077712345', '', '16 Queen Street', 'Leeds', 'United Kingdom', 'x1 2YZ', 'household', 0, 0, '');
INSERT INTO `users` VALUES (333, 'Sara King', 'SK123', '120120', '077665544', '', '123 Second Street', 'York', 'United Kingdom', 'm1 2np', 'household', 0, 0, '');
INSERT INTO `users` VALUES (444, 'Edward XYZ', 'EX2022', '98765', '077889900', 'flat 12', '40 Garden Street', 'Sheffield', 'United Kingdom', 'a13 3jk', 'household', 0, 0, '');
INSERT INTO `users` VALUES (447, '', 'AFa', '1234', '', '', '', '', '', '', 'household', 0, 0, 'qq604271396@gmail.com');
INSERT INTO `users` VALUES (448, 'aa', 'aa', 'aa', '', '', '', '', '', '', '', 0, 0, '');

SET FOREIGN_KEY_CHECKS = 1;
