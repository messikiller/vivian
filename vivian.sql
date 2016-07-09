/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : vivian

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-07-09 09:38:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `Id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `blood` int(11) unsigned NOT NULL DEFAULT '100',
  `killed_times` int(11) unsigned NOT NULL DEFAULT '0',
  `protect_times` int(11) unsigned NOT NULL DEFAULT '0',
  `negative_value` int(11) unsigned NOT NULL,
  `positive_value` int(11) unsigned NOT NULL,
  `o_time` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'vivian', '100', '0', '0', '0', '0', '123123123');

-- ----------------------------
-- Table structure for `role_behavior`
-- ----------------------------
DROP TABLE IF EXISTS `role_behavior`;
CREATE TABLE `role_behavior` (
  `Id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `behavior` text NOT NULL,
  `behavior_type` int(11) NOT NULL,
  `o_time` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_behavior
-- ----------------------------
INSERT INTO `role_behavior` VALUES ('1', '1', 'hello', '1', '1467972260');
INSERT INTO `role_behavior` VALUES ('2', '1', 'fuck you', '0', '1467972527');
