/*
Navicat MySQL Data Transfer

Source Server         : 2004
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mydb2004

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-08-07 19:07:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `userpass` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('fdfgfdggffd', '123123aaa');
INSERT INTO `user` VALUES ('asdfghjkl123111', '123456789bnm');
INSERT INTO `user` VALUES ('djfhsjkhfk123', '123123123abc');
INSERT INTO `user` VALUES ('djhfihsdjf', '123123123bnm');
INSERT INTO `user` VALUES ('zhengzihui', '123123bnm');
INSERT INTO `user` VALUES ('hsdfhdjfh', '123456789bbbb');
INSERT INTO `user` VALUES ('ee123132sdfw', '123456bnm');
INSERT INTO `user` VALUES ('郑紫慧', '111');
INSERT INTO `user` VALUES ('asdfghjkl123', '222');
INSERT INTO `user` VALUES ('xp', '222');
INSERT INTO `user` VALUES ('asdfghjkl12345', '123456789zz');
