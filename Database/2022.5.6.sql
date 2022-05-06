CREATE DATABASE  IF NOT EXISTS `sunlight` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sunlight`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: sunlight
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gdp` double NOT NULL,
  `carbon_emissions` double NOT NULL,
  `price_of_solar_panel` double NOT NULL,
  `savings` double NOT NULL,
  `country_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `country_description` varchar(2000) NOT NULL,
  PRIMARY KEY (`country_id`) USING BTREE,
  UNIQUE KEY `name_UNIQUE` (`country_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=790 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (123,'Tanzania',62.41,0.21,500,0,'https://cdn.britannica.com/20/20-004-EB20A026/Flag-Tanzania.jpg','Tanzania is a country in East Africa within the African Great Lakes region. Only 15 per cent of Tanzanians had access to electric power in 2011, however rising to 35.2 per cent in 2018.In 2013, 49.7 per cent of Tanzania\'s electricity generation came from natural gas, 28.9 per cent from hydroelectric sources, 20.4 per cent from thermal sources, and 1.0 percent from outside the country.'),(456,'Kenya',98.84,0.36,600,100,'https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg','Kenya has one of the highest household solar ownership rates in the world. More Kenyans are turning to solar power due to relatively high connectivity costs to the grid and the abundance of solar power in Kenya. Solar photovoltaic systems are particularly prevalent among rural households with limited access to grid electricity. They are sold to users in Kenya through a competitive free market network and are commonly used for solar water pumping, solar irrigation, and cold storage. More factories are installing solar panels on their rooftops to counter the high cost and instability of grid electricity. Under the Value Added Tax (VAT) Act 2013, the VAT Amendment Act 2014, and the Finance Act 2018, the Kenyan government agreed to remove import duty and zero-rated VAT for renewable energy equipment and accessories. \nTo achieve the renewable energy goals set forth in “Vision 2030,” the Kenyan government has launched several solar energy projects, of which the Garissa Solar Power Plant has substantially reduced energy costs in Kenya and has become the largest solar power plant in East and Central Africa.'),(789,'Ethiopia',107.6,0.15,550,320,'https://cdn.countryflags.com/thumbs/ethiopia/flag-800.png','In 2011, over 96% of Ethiopia\'s electricity was from hydropower. The country began a large program to expand its electricity supply in the 2010s from 2,000 MW to 10,000 MW. This was to be done mainly with renewable sources. Wind and geothermal were included to offset seasonal differences in water levels. Ethiopia plans to export electricity to neighboring countries, but transmission lines will need to be upgraded and expanded.\nMost of the energy needs of Ethiopia are filled by biofuels for cooking, heating, and off-grid lighting. Petroleum, including gasoline, diesel, and kerosene supply less than 7% of the country\'s energy supply. Solar photovoltaics is being promoted to replace fuel-based lighting and off-grid electrical supply with a solar panel assembly plant opening in Addis Ababa in early 2013. The majority of Ethiopia\'s population lives in rural areas and very few have access to electricity.\nEthiopia is planning for a carbon-neutral status by 2025. \nThis aim was set through their ambitious three-stage Growth and Transformation Plan, Ethiopia seeks to transform itself into a modern economy by 2025. According to the Ministry of Water and Energy, as of 2018, only 23% of the national populace has access to grid electricity. That figure falls even further to 10% when moving to rural areas – a figure that\'s smaller than the 17% average found across the rest of Africa. Drought frequency, flooding, poor land management techniques, and a rapidly growing population all have increased the situation’s direness. As of 2018, Ethiopia had launched the National Electrification Program which aimed for 65% of the population to be grid-connected by 2025. ');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `dataTime` varchar(45) NOT NULL,
  `transfer_amount` double NOT NULL,
  `panel_amount` int NOT NULL,
  `status` varchar(45) NOT NULL,
  `uuid` varchar(45) NOT NULL,
  `country_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`uuid`) USING BTREE,
  KEY `countryID_idx` (`country_id`),
  KEY `user_transaction_idx` (`user_id`),
  CONSTRAINT `country_transaction` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`),
  CONSTRAINT `user_transaction` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES ('2022-05-05 17:56:27',25,1,'pending','234567891',0,0);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telephone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address_first_line` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `street_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `country` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `postcode` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `feul_usage_pm` double DEFAULT NULL,
  `electicity_usage_pm` double DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=445 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (111,'Arwa Alfitni','AF','1234','07375100804','flat 80','1 first street','Sheffield','united kingdom','a12 3bc','admin',NULL,NULL,NULL),(222,'Jonh Smith','JS123','56789','077712345',NULL,'16 Queen Street','Leeds','United Kingdom','x1 2YZ','household',NULL,NULL,NULL),(333,'Sara King','SK123','120120','077665544',NULL,'123 Second Street','York','United Kingdom','m1 2np','household',NULL,NULL,NULL),(444,'Edward XYZ','EX2022','98765','077889900','flat 12','40 Garden Street','Sheffield','United Kingdom','a13 3jk','staff',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-06 18:57:04
