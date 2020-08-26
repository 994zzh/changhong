/*
Navicat MySQL Data Transfer

Source Server         : 2004
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mydb2004

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-08-07 20:19:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ring
-- ----------------------------
DROP TABLE IF EXISTS `ring`;
CREATE TABLE `ring` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `sell` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=152 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ring
-- ----------------------------
INSERT INTO `ring` VALUES ('1', '拥暖Ⅱ', 'http://www.zbird.com/weddings/rdt30-7657128.html', 'http://imp.zbird.cn/314/81/31481_388!big.jpg', '\n                                17020\n                                ', '售出13480');
INSERT INTO `ring` VALUES ('2', '永恒之约Ⅱ', 'http://www.zbird.com/weddings/rdt48-7370434.html', 'http://imu.zbird.cn/332/08/33208_388!big.jpg', '\n                                5899\n                                ', '售出14795');
INSERT INTO `ring` VALUES ('3', 'Energy能量', 'http://www.zbird.com/weddings/rdq81-7604830.html', 'http://imp.zbird.cn/249/73/24973_388!big.jpg', '\n                                23600\n                                ', '售出2181');
INSERT INTO `ring` VALUES ('4', '遇见爱', 'http://www.zbird.com/weddings/rdl51-6542684.html', 'http://imu.zbird.cn/185/48/18548_388!big.jpg', '\n                                1499\n                                ', '售出1683');
INSERT INTO `ring` VALUES ('5', '倾心', 'http://www.zbird.com/weddings/rdq08-7631077.html', 'http://imp.zbird.cn/233/01/23301_388!big.jpg', '\n                                4800\n                                ', '售出8829');
INSERT INTO `ring` VALUES ('6', '月影', 'http://www.zbird.com/weddings/rdv89-7630247.html', 'http://imp.zbird.cn/617/03/61703_388!big.jpg', '\n                                13540\n                                ', '售出86');
INSERT INTO `ring` VALUES ('7', '享悦Ⅱ', 'http://www.zbird.com/weddings/rdt16-7316532.html', 'http://imp.zbird.cn/323/31/32331_388!big.jpg', '\n                                12330\n                                ', '售出5437');
INSERT INTO `ring` VALUES ('8', '百变风情编织钻石组合戒指', 'http://www.zbird.com/weddings/rdv55-7616743.html', 'http://imu.zbird.cn/612/42/61242_388!big.jpg', '\n                                10820\n                                ', '售出18');
INSERT INTO `ring` VALUES ('9', '花冠(女戒)', 'http://www.zbird.com/weddings/rd212-7269154.html', 'http://imu.zbird.cn/573/8/5738_388!big.jpg', '\n                                1899\n                                ', '售出4952');
INSERT INTO `ring` VALUES ('10', '典爱', 'http://www.zbird.com/weddings/rdp68-7476817.html', 'http://imu.zbird.cn/228/08/22808_388!big.jpg', '\n                                10740\n                                ', '售出5587');
INSERT INTO `ring` VALUES ('11', '爱的季节', 'http://www.zbird.com/weddings/rdr08-7115250.html', 'http://imp.zbird.cn/253/45/25345_388!big.jpg', '\n                                16680\n                                ', '售出3946');
INSERT INTO `ring` VALUES ('12', '知.心', 'http://www.zbird.com/weddings/rdp32-7476874.html', 'http://imp.zbird.cn/222/09/22209_388!big.jpg', '\n                                2099\n                                ', '售出2468');
INSERT INTO `ring` VALUES ('13', '炫动', 'http://www.zbird.com/weddings/rdq11-6263453.html', 'http://imu.zbird.cn/233/04/23304_388!big.jpg', '\n                                10090\n                                ', '售出5762');
INSERT INTO `ring` VALUES ('14', '动心Ⅱ', 'http://www.zbird.com/weddings/rdt75-6891445.html', 'http://imu.zbird.cn/314/80/31480_388!big.jpg', '\n                                11480\n                                ', '售出4402');
INSERT INTO `ring` VALUES ('15', '北极光 月光女王Ⅱ', 'http://www.zbird.com/weddings/rdt67-7311880.html', 'http://imp.zbird.cn/323/73/32373_388!big.jpg', '\n                                15900\n                                ', '售出3804');
INSERT INTO `ring` VALUES ('16', '动心I', 'http://www.zbird.com/weddings/rdq23-4575705.html', 'http://imu.zbird.cn/233/16/23316_388!big.jpg', '\n                                12730\n                                ', '售出3275');
INSERT INTO `ring` VALUES ('17', '花火Ⅱ', 'http://www.zbird.com/weddings/rdt25-6891456.html', 'http://imu.zbird.cn/323/30/32330_388!big.jpg', '\n                                10670\n                                ', '售出2823');
INSERT INTO `ring` VALUES ('18', '心之舞', 'http://www.zbird.com/weddings/rdq10-6079454.html', 'http://imp.zbird.cn/233/03/23303_388!big.jpg', '\n                                4900\n                                ', '售出2349');
INSERT INTO `ring` VALUES ('19', '女皇Ⅱ', 'http://www.zbird.com/weddings/rdt61-7178018.html', 'http://imu.zbird.cn/319/62/31962_388!big.jpg', '\n                                11410\n                                ', '售出2292');
INSERT INTO `ring` VALUES ('20', '芳心', 'http://www.zbird.com/weddings/rdq30-3017889.html', 'http://imp.zbird.cn/233/23/23323_388!big.jpg', '\n                                12220\n                                ', '售出2185');
INSERT INTO `ring` VALUES ('21', '恋人絮语Ⅱ', 'http://www.zbird.com/weddings/rdt17-7169576.html', 'http://imp.zbird.cn/323/33/32333_388!big.jpg', '\n                                12630\n                                ', '售出2177');
INSERT INTO `ring` VALUES ('22', '暖阳', 'http://www.zbird.com/weddings/rdr10-7595427.html', 'http://imp.zbird.cn/253/77/25377_388!big.jpg', '\n                                12810\n                                ', '售出1831');
INSERT INTO `ring` VALUES ('23', '暖怀Ⅱ', 'http://www.zbird.com/weddings/rdt13-7311859.html', 'http://imp.zbird.cn/329/19/32919_388!big.jpg', '\n                                10820\n                                ', '售出1712');
INSERT INTO `ring` VALUES ('24', '共舞Ⅱ', 'http://www.zbird.com/weddings/rdt70-3778453.html', 'http://imp.zbird.cn/323/29/32329_388!big.jpg', '\n                                11820\n                                ', '售出1702');
INSERT INTO `ring` VALUES ('25', '心涟', 'http://www.zbird.com/weddings/rdq12-6317246.html', 'http://imp.zbird.cn/233/05/23305_388!big.jpg', '\n                                11390\n                                ', '售出1676');
INSERT INTO `ring` VALUES ('26', '缘来爱', 'http://www.zbird.com/weddings/rdp67-4864255.html', 'http://imp.zbird.cn/228/07/22807_388!big.jpg', '\n                                10600\n                                ', '售出1616');
INSERT INTO `ring` VALUES ('27', '甄心', 'http://www.zbird.com/weddings/rdp63-7668433.html', 'http://imu.zbird.cn/228/04/22804_388!big.jpg', '\n                                11310\n                                ', '售出1605');
INSERT INTO `ring` VALUES ('28', '五彩流年', 'http://www.zbird.com/weddings/rdq63-7628591.html', 'http://imp.zbird.cn/243/09/24309_388!big.jpg', '\n                                6200\n                                ', '售出1562');
INSERT INTO `ring` VALUES ('29', '恋爱纪Ⅱ', 'http://www.zbird.com/weddings/rdt24-7311849.html', 'http://imu.zbird.cn/323/36/32336_388!big.jpg', '\n                                11220\n                                ', '售出1407');
INSERT INTO `ring` VALUES ('30', '北极光 率真女神Ⅱ', 'http://www.zbird.com/weddings/rdt96-7334024.html', 'http://imu.zbird.cn/326/62/32662_388!big.jpg', '\n                                16000\n                                ', '售出1306');
INSERT INTO `ring` VALUES ('31', '雪舞', 'http://www.zbird.com/weddings/rds37-7164051.html', 'http://imu.zbird.cn/274/72/27472_388!big.jpg', '\n                                5699\n                                ', '售出1292');
INSERT INTO `ring` VALUES ('32', '曼舞', 'http://www.zbird.com/weddings/rdp82-7486804.html', 'http://imu.zbird.cn/230/44/23044_388!big.jpg', '\n                                14580\n                                ', '售出1208');
INSERT INTO `ring` VALUES ('33', '北极光 森林女王Ⅱ', 'http://www.zbird.com/weddings/rdt66-6983430.html', 'http://imu.zbird.cn/323/72/32372_388!big.jpg', '\n                                16300\n                                ', '售出1186');
INSERT INTO `ring` VALUES ('34', '灵动Ⅱ', 'http://www.zbird.com/weddings/rdt01-6891459.html', 'http://imu.zbird.cn/323/32/32332_388!big.jpg', '\n                                12630\n                                ', '售出1154');
INSERT INTO `ring` VALUES ('35', '爱莲', 'http://www.zbird.com/weddings/rdp33-5265820.html', 'http://imu.zbird.cn/222/10/22210_388!big.jpg', '\n                                24180\n                                ', '售出1149');
INSERT INTO `ring` VALUES ('36', '柔情', 'http://www.zbird.com/weddings/rdt02-7091278.html', 'http://imp.zbird.cn/332/07/33207_388!big.jpg', '\n                                15780\n                                ', '售出1086');
INSERT INTO `ring` VALUES ('37', '爱的皇冠Ⅱ', 'http://www.zbird.com/weddings/rdt31-6740837.html', 'http://imp.zbird.cn/323/35/32335_388!big.jpg', '\n                                12330\n                                ', '售出1056');
INSERT INTO `ring` VALUES ('38', '三世之约', 'http://www.zbird.com/weddings/rdq19-6434939.html', 'http://imu.zbird.cn/233/12/23312_388!big.jpg', '\n                                5200\n                                ', '售出945');
INSERT INTO `ring` VALUES ('39', '花簇', 'http://www.zbird.com/weddings/rdp83-7091303.html', 'http://imp.zbird.cn/230/45/23045_388!big.jpg', '\n                                21150\n                                ', '售出928');
INSERT INTO `ring` VALUES ('40', '圣枝(护戒)', 'http://www.zbird.com/weddings/rdt54-6959460.html', 'http://imu.zbird.cn/395/84/39584_388!big.jpg', '\n                                2400\n                                ', '售出921');
INSERT INTO `ring` VALUES ('41', 'Pride骄傲', 'http://www.zbird.com/weddings/rdq78-7357479.html', 'http://imu.zbird.cn/249/72/24972_388!big.jpg', '\n                                21300\n                                ', '售出918');
INSERT INTO `ring` VALUES ('42', '典藏Ⅱ', 'http://www.zbird.com/weddings/rdt69-7186864.html', 'http://imp.zbird.cn/319/63/31963_388!big.jpg', '\n                                11100\n                                ', '售出895');
INSERT INTO `ring` VALUES ('43', '满天星', 'http://www.zbird.com/weddings/rdq86-6484661.html', 'http://imp.zbird.cn/250/09/25009_388!big.jpg', '\n                                27900\n                                ', '售出879');
INSERT INTO `ring` VALUES ('44', '心相守', 'http://www.zbird.com/weddings/rdr18-7284075.html', 'http://imp.zbird.cn/254/15/25415_388!big.jpg', '\n                                11170\n                                ', '售出840');
INSERT INTO `ring` VALUES ('45', '梦幻花园', 'http://www.zbird.com/weddings/rdr06-7622242.html', 'http://imu.zbird.cn/253/74/25374_388!big.jpg', '\n                                10500\n                                ', '售出836');
INSERT INTO `ring` VALUES ('46', '蜜语', 'http://www.zbird.com/weddings/rdp81-7604817.html', 'http://imp.zbird.cn/230/43/23043_388!big.jpg', '\n                                11620\n                                ', '售出811');
INSERT INTO `ring` VALUES ('47', 'Elegant优雅', 'http://www.zbird.com/weddings/rdq82-6792448.html', 'http://imu.zbird.cn/249/74/24974_388!big.jpg', '\n                                18500\n                                ', '售出784');
INSERT INTO `ring` VALUES ('48', '星光(钻戒)', 'http://www.zbird.com/weddings/rdr66-6964355.html', 'http://imu.zbird.cn/261/26/26126_388!big.jpg', '\n                                6599\n                                ', '售出742');
INSERT INTO `ring` VALUES ('49', '芳芮', 'http://www.zbird.com/weddings/rdq75-7516627.html', 'http://imp.zbird.cn/249/57/24957_388!big.jpg', '\n                                11590\n                                ', '售出723');
INSERT INTO `ring` VALUES ('50', 'Passion热情', 'http://www.zbird.com/weddings/rdq77-4812169.html', 'http://imp.zbird.cn/249/71/24971_388!big.jpg', '\n                                27300\n                                ', '售出675');
INSERT INTO `ring` VALUES ('51', '纯真', 'http://www.zbird.com/weddings/rdr43-7618966.html', 'http://imu.zbird.cn/255/02/25502_499!middle.jpg', '\n                                2299\n                                ', '售出664');
INSERT INTO `ring` VALUES ('52', '星光闪耀Ⅰ', 'http://www.zbird.com/weddings/rdu62-6248934.html', 'http://imp.zbird.cn/331/55/33155_388!big.jpg', '\n                                4199\n                                ', '售出658');
INSERT INTO `ring` VALUES ('53', '永恒之恋', 'http://www.zbird.com/weddings/rdq20-7668434.html', 'http://imp.zbird.cn/233/13/23313_388!big.jpg', '\n                                11810\n                                ', '售出643');
INSERT INTO `ring` VALUES ('54', '优雅印记', 'http://www.zbird.com/weddings/rdr36-6504448.html', 'http://imp.zbird.cn/254/95/25495_499!middle.jpg', '\n                                1799\n                                ', '售出606');
INSERT INTO `ring` VALUES ('55', '心翼', 'http://www.zbird.com/weddings/rdp86-6367167.html', 'http://imu.zbird.cn/230/48/23048_388!big.jpg', '\n                                10600\n                                ', '售出543');
INSERT INTO `ring` VALUES ('56', '圣枝', 'http://www.zbird.com/weddings/rdt53-7316524.html', 'http://imp.zbird.cn/395/83/39583_388!big.jpg', '\n                                10800\n                                ', '售出500');
INSERT INTO `ring` VALUES ('57', '柔媚Ⅱ', 'http://www.zbird.com/weddings/rdt05-5597158.html', 'http://imu.zbird.cn/332/38/33238_388!big.jpg', '\n                                12480\n                                ', '售出479');
INSERT INTO `ring` VALUES ('58', '爱冕', 'http://www.zbird.com/weddings/rds51-7169660.html', 'http://imu.zbird.cn/279/76/27976_388!big.jpg', '\n                                11740\n                                ', '售出452');
INSERT INTO `ring` VALUES ('59', '比翼双飞', 'http://www.zbird.com/weddings/rdq01-7612552.html', 'http://imu.zbird.cn/232/94/23294_399!middle.jpg', '\n                                11860\n                                ', '售出445');
INSERT INTO `ring` VALUES ('60', '璀璨之夜', 'http://www.zbird.com/weddings/rdq27-7060618.html', 'http://imu.zbird.cn/233/20/23320_388!big.jpg', '\n                                5900\n                                ', '售出440');
INSERT INTO `ring` VALUES ('61', '巴黎之恋', 'http://www.zbird.com/weddings/rdq14-7269163.html', 'http://imp.zbird.cn/233/07/23307_388!big.jpg', '\n                                12450\n                                ', '售出435');
INSERT INTO `ring` VALUES ('62', '三生三世', 'http://www.zbird.com/weddings/rdq07-6892343.html', 'http://imu.zbird.cn/233/00/23300_388!big.jpg', '\n                                10470\n                                ', '售出422');
INSERT INTO `ring` VALUES ('63', '爱之韵', 'http://www.zbird.com/weddings/rdq28-7353805.html', 'http://imp.zbird.cn/233/21/23321_388!big.jpg', '\n                                11580\n                                ', '售出415');
INSERT INTO `ring` VALUES ('64', '甜美', 'http://www.zbird.com/weddings/rdr37-6707279.html', 'http://imu.zbird.cn/254/96/25496_499!middle.jpg', '\n                                5599\n                                ', '售出414');
INSERT INTO `ring` VALUES ('65', '圣环', 'http://www.zbird.com/weddings/rdt57-7008819.html', 'http://imu.zbird.cn/407/72/40772_388!big.jpg', '\n                                13400\n                                ', '售出385');
INSERT INTO `ring` VALUES ('66', '芳华', 'http://www.zbird.com/weddings/rdq65-7112870.html', 'http://imp.zbird.cn/243/11/24311_388!big.jpg', '\n                                23440\n                                ', '售出384');
INSERT INTO `ring` VALUES ('67', '缤纷', 'http://www.zbird.com/weddings/rdq66-7516625.html', 'http://imu.zbird.cn/243/12/24312_388!big.jpg', '\n                                11640\n                                ', '售出380');
INSERT INTO `ring` VALUES ('68', '捧花', 'http://www.zbird.com/weddings/rds89-7370446.html', 'http://imu.zbird.cn/312/86/31286_388!big.jpg', '\n                                5999\n                                ', '售出336');
INSERT INTO `ring` VALUES ('69', '羞涩蔷薇', 'http://www.zbird.com/weddings/rdu32-6886911.html', 'http://imp.zbird.cn/330/25/33025_388!big.jpg', '\n                                4599\n                                ', '售出318');
INSERT INTO `ring` VALUES ('70', '心爱', 'http://www.zbird.com/weddings/rdp80-2247938.html', 'http://imu.zbird.cn/230/42/23042_388!big.jpg', '\n                                16540\n                                ', '售出307');
INSERT INTO `ring` VALUES ('71', '返璞冠冕', 'http://www.zbird.com/weddings/rdu23-6478164.html', 'http://imu.zbird.cn/327/86/32786_388!big.jpg', '\n                                1299\n                                ', '售出307');
INSERT INTO `ring` VALUES ('72', '华冠', 'http://www.zbird.com/weddings/rdt55-7355449.html', 'http://imu.zbird.cn/401/58/40158_388!big.jpg', '\n                                12000\n                                ', '售出288');
INSERT INTO `ring` VALUES ('73', '宠心Ⅱ', 'http://www.zbird.com/weddings/rdt28-5787835.html', 'http://imu.zbird.cn/323/34/32334_388!big.jpg', '\n                                12230\n                                ', '售出276');
INSERT INTO `ring` VALUES ('74', '圆满', 'http://www.zbird.com/weddings/rdq18-7612515.html', 'http://imp.zbird.cn/233/11/23311_388!big.jpg', '\n                                12620\n                                ', '售出272');
INSERT INTO `ring` VALUES ('75', '星眸钻石戒指', 'http://www.zbird.com/weddings/rdt04-6842834.html', 'http://imu.zbird.cn/485/50/48550_388!big.jpg', '\n                                17920\n                                ', '售出259');
INSERT INTO `ring` VALUES ('76', 'Instinctive随心', 'http://www.zbird.com/weddings/rds64-5380376.html', 'http://imp.zbird.cn/288/57/28857_388!big.jpg', '\n                                40300\n                                ', '售出255');
INSERT INTO `ring` VALUES ('77', '沁甜', 'http://www.zbird.com/weddings/rdq04-6310050.html', 'http://imp.zbird.cn/232/97/23297_388!big.jpg', '\n                                10830\n                                ', '售出254');
INSERT INTO `ring` VALUES ('78', '蜜之情', 'http://www.zbird.com/weddings/rdq94-6721499.html', 'http://imp.zbird.cn/251/71/25171_388!big.jpg', '\n                                1999\n                                ', '售出246');
INSERT INTO `ring` VALUES ('79', '交心', 'http://www.zbird.com/weddings/rdt12-6557509.html', 'http://imp.zbird.cn/356/93/35693_388!big.jpg', '\n                                23850\n                                ', '售出223');
INSERT INTO `ring` VALUES ('80', '结网Ⅱ', 'http://www.zbird.com/weddings/rdt35-5380442.html', 'http://imp.zbird.cn/381/77/38177_388!big.jpg', '\n                                28230\n                                ', '售出217');
INSERT INTO `ring` VALUES ('81', '绽彩钻石戒指', 'http://www.zbird.com/weddings/rdt46-7334016.html', 'http://imp.zbird.cn/532/31/53231_388!big.jpg', '\n                                16560\n                                ', '售出213');
INSERT INTO `ring` VALUES ('82', '心仪', 'http://www.zbird.com/weddings/rds75-7620431.html', 'http://imp.zbird.cn/296/47/29647_388!big.jpg', '\n                                5399\n                                ', '售出184');
INSERT INTO `ring` VALUES ('83', '传情', 'http://www.zbird.com/weddings/rdt82-6825529.html', 'http://imp.zbird.cn/524/19/52419_388!big.jpg', '\n                                26900\n                                ', '售出181');
INSERT INTO `ring` VALUES ('84', '荆棘蔷薇', 'http://www.zbird.com/weddings/rdu21-6905378.html', 'http://imu.zbird.cn/327/84/32784_388!big.jpg', '\n                                1699\n                                ', '售出175');
INSERT INTO `ring` VALUES ('85', '永恒见证', 'http://www.zbird.com/weddings/rdr57-6314466.html', 'http://imp.zbird.cn/255/79/25579_388!big.jpg', '\n                                1999\n                                ', '售出169');
INSERT INTO `ring` VALUES ('86', '结网Ⅱ(护戒)', 'http://www.zbird.com/weddings/rdt36-5375650.html', 'http://imu.zbird.cn/381/78/38178_388!big.jpg', '\n                                2500\n                                ', '售出165');
INSERT INTO `ring` VALUES ('87', '流影钻石戒指', 'http://www.zbird.com/weddings/rdt47-6887005.html', 'http://imu.zbird.cn/532/32/53232_388!big.jpg', '\n                                17700\n                                ', '售出165');
INSERT INTO `ring` VALUES ('88', '光轮钻石戒指', 'http://www.zbird.com/weddings/rdt45-7311876.html', 'http://imu.zbird.cn/532/30/53230_388!big.jpg', '\n                                16200\n                                ', '售出156');
INSERT INTO `ring` VALUES ('89', '盟誓', 'http://www.zbird.com/weddings/rdt14-6891464.html', 'http://imu.zbird.cn/399/90/39990_388!big.jpg', '\n                                11590\n                                ', '售出155');
INSERT INTO `ring` VALUES ('90', '珍冠', 'http://www.zbird.com/weddings/rdt50-6928400.html', 'http://imu.zbird.cn/404/32/40432_388!big.jpg', '\n                                14000\n                                ', '售出154');
INSERT INTO `ring` VALUES ('91', '铭记', 'http://www.zbird.com/weddings/rdt06-7073567.html', 'http://imp.zbird.cn/352/79/35279_388!big.jpg', '\n                                11500\n                                ', '售出152');
INSERT INTO `ring` VALUES ('92', '仲夏之梦', 'http://www.zbird.com/weddings/rdq64-5898065.html', 'http://imu.zbird.cn/243/10/24310_388!big.jpg', '\n                                12240\n                                ', '售出133');
INSERT INTO `ring` VALUES ('93', '依赖1', 'http://www.zbird.com/weddings/rdt20-7476852.html', 'http://imp.zbird.cn/547/41/54741_388!big.jpg', '\n                                13500\n                                ', '售出128');
INSERT INTO `ring` VALUES ('94', '三世情缘', 'http://www.zbird.com/weddings/rdq55-7353811.html', 'http://imp.zbird.cn/241/69/24169_388!big.jpg', '\n                                12030\n                                ', '售出126');
INSERT INTO `ring` VALUES ('95', '华冠(护戒)', 'http://www.zbird.com/weddings/rdt56-6245809.html', 'http://imp.zbird.cn/401/59/40159_388!big.jpg', '\n                                2600\n                                ', '售出125');
INSERT INTO `ring` VALUES ('96', '荣冠', 'http://www.zbird.com/weddings/rdt51-7008804.html', 'http://imp.zbird.cn/395/81/39581_388!big.jpg', '\n                                14000\n                                ', '售出124');
INSERT INTO `ring` VALUES ('97', '织采', 'http://www.zbird.com/weddings/rds50-5766682.html', 'http://imu.zbird.cn/277/82/27782_388!big.jpg', '\n                                30290\n                                ', '售出122');
INSERT INTO `ring` VALUES ('98', '流年(红宝石纪念款)', 'http://www.zbird.com/weddings/rdt08-7116186.html', 'http://imp.zbird.cn/352/81/35281_388!big.jpg', '\n                                27100\n                                ', '售出117');
INSERT INTO `ring` VALUES ('99', '瑰色蔷薇', 'http://www.zbird.com/weddings/rdu33-6905344.html', 'http://imu.zbird.cn/330/26/33026_388!big.jpg', '\n                                11290\n                                ', '售出113');
INSERT INTO `ring` VALUES ('100', '流年(女戒)', 'http://www.zbird.com/weddings/rdt07-6928358.html', 'http://imu.zbird.cn/352/80/35280_388!big.jpg', '\n                                13750\n                                ', '售出112');
INSERT INTO `ring` VALUES ('101', '复古甜心', 'http://www.zbird.com/weddings/rdr45-2105277.html', 'http://imu.zbird.cn/255/04/25504_499!middle.jpg', '\n                                1199\n                                ', '售出110');
INSERT INTO `ring` VALUES ('102', '花之环', 'http://www.zbird.com/weddings/rdu08-7036441.html', 'http://imp.zbird.cn/319/97/31997_499!middle.jpg', '\n                                1500\n                                ', '售出109');
INSERT INTO `ring` VALUES ('103', '旋爱', 'http://www.zbird.com/weddings/rdu55-5070008.html', 'http://imu.zbird.cn/357/06/35706_388!big.jpg', '\n                                2900\n                                ', '售出102');
INSERT INTO `ring` VALUES ('104', '拥护', 'http://www.zbird.com/weddings/rds09-4838879.html', 'http://imu.zbird.cn/266/60/26660_499!middle.jpg', '\n                                3699\n                                ', '售出93');
INSERT INTO `ring` VALUES ('105', '瞬间', 'http://www.zbird.com/weddings/rdr39-6707251.html', 'http://imu.zbird.cn/254/98/25498_499!middle.jpg', '\n                                2899\n                                ', '售出91');
INSERT INTO `ring` VALUES ('106', '追随', 'http://www.zbird.com/weddings/rdt86-6314361.html', 'http://imp.zbird.cn/524/23/52423_388!big.jpg', '\n                                20600\n                                ', '售出84');
INSERT INTO `ring` VALUES ('107', '香雪兰', 'http://www.zbird.com/weddings/rds90-7360590.html', 'http://imp.zbird.cn/312/87/31287_388!big.jpg', '\n                                4799\n                                ', '售出82');
INSERT INTO `ring` VALUES ('108', '执手', 'http://www.zbird.com/weddings/rdt87-6928397.html', 'http://imu.zbird.cn/524/24/52424_599!middle.jpg', '\n                                19900\n                                ', '售出76');
INSERT INTO `ring` VALUES ('109', '护佑', 'http://www.zbird.com/weddings/rdt58-7008817.html', 'http://imp.zbird.cn/418/91/41891_388!big.jpg', '\n                                15400\n                                ', '售出74');
INSERT INTO `ring` VALUES ('110', '爱满银河', 'http://www.zbird.com/weddings/rdq87-2282543.html', 'http://imp.zbird.cn/250/13/25013_388!big.jpg', '\n                                27630\n                                ', '售出70');
INSERT INTO `ring` VALUES ('111', 'BRAVE无畏', 'http://www.zbird.com/weddings/rdt03-5019030.html', 'http://imu.zbird.cn/334/66/33466_388!big.jpg', '\n                                29000\n                                ', '售出63');
INSERT INTO `ring` VALUES ('112', '薄荷珐琅钻石戒指', 'http://www.zbird.com/weddings/rdv19-6638652.html', 'http://imp.zbird.cn/590/13/59013_388!big.jpg', '\n                                6150\n                                ', '售出61');
INSERT INTO `ring` VALUES ('113', '心房', 'http://www.zbird.com/weddings/rdt63-6456096.html', 'http://imu.zbird.cn/548/50/54850_388!big.jpg', '\n                                2600\n                                ', '售出49');
INSERT INTO `ring` VALUES ('114', '云锦', 'http://www.zbird.com/weddings/rdv77-7623216.html', 'http://imp.zbird.cn/613/57/61357_599!middle.jpg', '\n                                6010\n                                ', '售出49');
INSERT INTO `ring` VALUES ('115', '芍药花冠', 'http://www.zbird.com/weddings/rdu84-7327879.html', 'http://imu.zbird.cn/353/92/35392_388!big.jpg', '\n                                17420\n                                ', '售出48');
INSERT INTO `ring` VALUES ('116', '花语', 'http://www.zbird.com/weddings/rdu44-4587166.html', 'http://imp.zbird.cn/340/29/34029_388!big.jpg', '\n                                4880\n                                ', '售出42');
INSERT INTO `ring` VALUES ('117', '加盟专供18', 'http://www.zbird.com/weddings/rdu80-7357551.html', 'http://imp.zbird.cn/352/83/35283_388!big.jpg', '\n                                6700\n                                ', '售出40');
INSERT INTO `ring` VALUES ('118', '摘星', 'http://www.zbird.com/weddings/rdt64-6456107.html', 'http://imp.zbird.cn/548/51/54851_388!big.jpg', '\n                                2600\n                                ', '售出38');
INSERT INTO `ring` VALUES ('119', '粉珐琅钻石戒指', 'http://www.zbird.com/weddings/rdv18-6998120.html', 'http://imu.zbird.cn/590/12/59012_388!big.jpg', '\n                                6770\n                                ', '售出33');
INSERT INTO `ring` VALUES ('120', '永恒守护', 'http://www.zbird.com/weddings/rdv74-7351185.html', 'http://imu.zbird.cn/613/10/61310_399!middle.jpg', '\n                                2399\n                                ', '售出33');
INSERT INTO `ring` VALUES ('121', '相惜', 'http://www.zbird.com/weddings/rds49-2650749.html', 'http://imp.zbird.cn/279/49/27949_388!big.jpg', '\n                                33220\n                                ', '售出32');
INSERT INTO `ring` VALUES ('122', '御顶蓝风铃', 'http://www.zbird.com/weddings/rdu85-7323401.html', 'http://imp.zbird.cn/353/93/35393_388!big.jpg', '\n                                14960\n                                ', '售出31');
INSERT INTO `ring` VALUES ('123', '厮守1', 'http://www.zbird.com/weddings/rdt21-7169606.html', 'http://imu.zbird.cn/547/42/54742_388!big.jpg', '\n                                31300\n                                ', '售出31');
INSERT INTO `ring` VALUES ('124', '樱蔓', 'http://www.zbird.com/weddings/rdu95-7202740.html', 'http://imp.zbird.cn/467/11/46711_388!big.jpg', '\n                                4910\n                                ', '售出25');
INSERT INTO `ring` VALUES ('125', '百变风情楼花钻石组合戒指', 'http://www.zbird.com/weddings/rdv56-7616748.html', 'http://imp.zbird.cn/612/43/61243_388!big.jpg', '\n                                11230\n                                ', '售出21');
INSERT INTO `ring` VALUES ('126', '星月伴', 'http://www.zbird.com/weddings/rdt62-6456154.html', 'http://imp.zbird.cn/548/49/54849_388!big.jpg', '\n                                3600\n                                ', '售出20');
INSERT INTO `ring` VALUES ('127', '加盟专供3', 'http://www.zbird.com/weddings/rdu65-7226678.html', 'http://imp.zbird.cn/352/57/35257_388!big.jpg', '\n                                6200\n                                ', '售出19');
INSERT INTO `ring` VALUES ('128', '归燕', 'http://www.zbird.com/weddings/rdv88-7603118.html', 'http://imp.zbird.cn/616/77/61677_599!middle.jpg', '\n                                11810\n                                ', '售出19');
INSERT INTO `ring` VALUES ('129', '倾心守护', 'http://www.zbird.com/weddings/rdv75-7351167.html', 'http://imp.zbird.cn/613/11/61311_499!middle.jpg', '\n                                2099\n                                ', '售出17');
INSERT INTO `ring` VALUES ('130', '怜爱', 'http://www.zbird.com/weddings/rdu56-5063696.html', 'http://imu.zbird.cn/357/08/35708_399!middle.jpg', '\n                                4700\n                                ', '售出16');
INSERT INTO `ring` VALUES ('131', '百变风情藤蔓钻石组合戒指', 'http://www.zbird.com/weddings/rdv53-7616735.html', 'http://imu.zbird.cn/612/40/61240_388!big.jpg', '\n                                11430\n                                ', '售出16');
INSERT INTO `ring` VALUES ('132', '羽落', 'http://www.zbird.com/weddings/rdv91-7630249.html', 'http://imp.zbird.cn/617/01/61701_388!big.jpg', '\n                                11080\n                                ', '售出15');
INSERT INTO `ring` VALUES ('133', '百变风情楼花钻石戒指', 'http://www.zbird.com/weddings/rdv57-7516520.html', 'http://imu.zbird.cn/612/44/61244_499!middle.jpg', '\n                                2910\n                                ', '售出13');
INSERT INTO `ring` VALUES ('134', '加盟专供17', 'http://www.zbird.com/weddings/rdu79-7175243.html', 'http://imp.zbird.cn/352/77/35277_388!big.jpg', '\n                                5500\n                                ', '售出11');
INSERT INTO `ring` VALUES ('135', '加盟专供10', 'http://www.zbird.com/weddings/rdu72-6219224.html', 'http://imu.zbird.cn/352/64/35264_388!big.jpg', '\n                                6100\n                                ', '售出11');
INSERT INTO `ring` VALUES ('136', '翕羽', 'http://www.zbird.com/weddings/rdv43-7231918.html', 'http://imu.zbird.cn/612/64/61264_599!middle.jpg', '\n                                10510\n                                ', '售出10');
INSERT INTO `ring` VALUES ('137', '落樱纱', 'http://www.zbird.com/weddings/rdu58-6264197.html', 'http://imp.zbird.cn/414/55/41455_388!big.jpg', '\n                                14230\n                                ', '售出10');
INSERT INTO `ring` VALUES ('138', '欢鸣', 'http://www.zbird.com/weddings/rdv92-7601628.html', 'http://imu.zbird.cn/617/00/61700_599!middle.jpg', '\n                                23490\n                                ', '售出9');
INSERT INTO `ring` VALUES ('139', '百变风情花簇钻石组合戒指', 'http://www.zbird.com/weddings/rdv54-7516507.html', 'http://imp.zbird.cn/612/41/61241_388!big.jpg', '\n                                13460\n                                ', '售出8');
INSERT INTO `ring` VALUES ('140', '华巢', 'http://www.zbird.com/weddings/rdv90-7596478.html', 'http://imu.zbird.cn/617/02/61702_388!big.jpg', '\n                                13760\n                                ', '售出7');
INSERT INTO `ring` VALUES ('141', '雀翎', 'http://www.zbird.com/weddings/rdv76-7231919.html', 'http://imu.zbird.cn/613/56/61356_599!middle.jpg', '\n                                11210\n                                ', '售出4');
INSERT INTO `ring` VALUES ('142', '守护骑士', 'http://www.zbird.com/weddings/rdv48-7631292.html', 'http://imu.zbird.cn/612/68/61268_388!big.jpg', '\n                                20920\n                                ', '售出2');
INSERT INTO `ring` VALUES ('143', '情绕', 'http://www.zbird.com/weddings/rdv37-7637236.html', 'http://imu.zbird.cn/613/66/61366_388!big.jpg', '\n                                100690\n                                ', '售出1');
INSERT INTO `ring` VALUES ('144', '直播彩宝款式2020072163', 'http://www.zbird.com/weddings/rdw22-7634419.html', 'http://imu.zbird.cn/621/92/62192_399!middle.jpg', '\n                                3990\n                                ', '售出1');
INSERT INTO `ring` VALUES ('145', '直播彩宝款式2020072164', 'http://www.zbird.com/weddings/rdw24-7634426.html', 'http://imu.zbird.cn/621/94/62194_399!middle.jpg', '\n                                4040\n                                ', '售出1');
INSERT INTO `ring` VALUES ('146', '直播彩宝款式2020072167', 'http://www.zbird.com/weddings/rdw27-7634435.html', 'http://imp.zbird.cn/621/97/62197_399!middle.jpg', '\n                                4210\n                                ', '售出1');
INSERT INTO `ring` VALUES ('147', '直播彩宝款式2020072165', 'http://www.zbird.com/weddings/rdw25-7634429.html', 'http://imp.zbird.cn/621/95/62195_499!middle.jpg', '\n                                5040\n                                ', '售出1');
INSERT INTO `ring` VALUES ('148', '直播彩宝款式2020072160', 'http://www.zbird.com/weddings/rdw19-7634412.html', 'http://imp.zbird.cn/621/89/62189_399!middle.jpg', '\n                                5210\n                                ', '售出1');
INSERT INTO `ring` VALUES ('149', '执子之情', 'http://www.zbird.com/weddings/rdv44-7631139.html', 'http://imp.zbird.cn/612/65/61265_388!big.jpg', '\n                                23190\n                                ', '售出1');
INSERT INTO `ring` VALUES ('150', '骑士之翼', 'http://www.zbird.com/weddings/rdw15-7645805.html', 'http://imu.zbird.cn/620/74/62074_388!big.jpg', '\n                                26250\n                                ', '售出1');
INSERT INTO `ring` VALUES ('151', '纯情之翼', 'http://www.zbird.com/weddings/rdw16-7644600.html', 'http://imp.zbird.cn/620/75/62075_388!big.jpg', '\n                                26440\n                                ', '售出1');
