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
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) NOT NULL,
  `gdp` double DEFAULT NULL,
  `carbon_emissions` double DEFAULT NULL,
  `price_of_solar_panel` double DEFAULT NULL,
  `savings` double DEFAULT NULL,
  `country_image` longtext,
  PRIMARY KEY (`country_id`),
  UNIQUE KEY `name_UNIQUE` (`country_name`)
) ENGINE=InnoDB AUTO_INCREMENT=790 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (123,'Tanzania',62.41,0.21,500,0,NULL),(456,'Kenya',98.84,0.36,600,100,NULL),(789,'Ethiopia',107.6,0.15,550,320,NULL);
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `household`
--

DROP TABLE IF EXISTS `household`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `household` (
  `savings` double DEFAULT NULL,
  `household_id` int NOT NULL,
  `feul_usage_pm` double DEFAULT NULL,
  `electicity_usage_pm` double DEFAULT NULL,
  PRIMARY KEY (`household_id`),
  KEY `fk_household_user1_idx` (`household_id`),
  CONSTRAINT `householdID` FOREIGN KEY (`household_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `household`
--

LOCK TABLES `household` WRITE;
/*!40000 ALTER TABLE `household` DISABLE KEYS */;
INSERT INTO `household` VALUES (50,222,106,90),(0,333,40,80);
/*!40000 ALTER TABLE `household` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `dataTime` datetime NOT NULL,
  `amount` varchar(45) DEFAULT NULL,
  `country_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`dataTime`,`country_id`,`user_id`),
  KEY `countryID_idx` (`country_id`),
  KEY `userID_idx` (`user_id`),
  CONSTRAINT `countryID` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`),
  CONSTRAINT `userID` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES ('2022-03-21 06:29:00','50',123,222);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_full_name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  `address_first_line` varchar(45) DEFAULT NULL,
  `street_name` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `postcode` varchar(45) DEFAULT NULL,
  `userType` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=445 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (111,'Arwa Alfitni','AF','1234','07375100804','flat 80','1 first street','Sheffield','united kingdom','a12 3bc','admin'),(222,'Jonh Smith','JS123','56789','077712345',NULL,'16 Queen Street','Leeds','United Kingdom','x1 2YZ','household'),(333,'Sara King','SK123','120120','077665544',NULL,'123 Second Street','York','United Kingdom','m1 2np','household'),(444,'Edward XYZ','EX2022','98765','077889900','flat 12','40 Garden Street','Sheffield','United Kingdom','a13 3jk','staff');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-28 21:08:28
