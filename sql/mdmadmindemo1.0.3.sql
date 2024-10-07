/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:33071
 Source Schema         : mdmadmindemo

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 21/08/2024 13:25:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for abm_p7m
-- ----------------------------
DROP TABLE IF EXISTS `abm_p7m`;
CREATE TABLE `abm_p7m`  (
  `abm_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'id',
  `private_key_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '私钥路径',
  `public_key_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书和公钥路径',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `expire_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '过期时间',
  `status` int(1) NOT NULL COMMENT '状态_正常:1-失效:0-过期:2-等待上传p7m:3',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'mdm服务器名称',
  `p7m_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'p7m文件',
  `consumer_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'p7m消费者key',
  `consumer_secret` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'p7m消费者秘钥',
  `access_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'p7m权限token',
  `access_secret` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'p7m权限秘钥',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `cert_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '推送证书id',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `is_public` int(1) NOT NULL COMMENT '是否公有_是:1-否:0',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`abm_id`) USING BTREE,
  INDEX `idx_abm_id`(`abm_id`) USING BTREE,
  INDEX `idx_org_id`(`org_id`) USING BTREE,
  INDEX `idx_status`(`is_delete`, `is_public`) USING BTREE,
  INDEX `idx_my_normal_abm`(`org_id`, `abm_id`, `is_delete`) USING BTREE,
  INDEX `idx_public_normal_abm`(`abm_id`, `is_public`, `is_delete`) USING BTREE,
  INDEX `idx_create_time`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'abm商务后台的mdm服务器p7m文件信息 需要做个定时任务判断是否过期 调用过程中如果出现权限错误的情况需要更新数据库为失效' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of abm_p7m
-- ----------------------------

-- ----------------------------
-- Table structure for device_access_auth_list
-- ----------------------------
DROP TABLE IF EXISTS `device_access_auth_list`;
CREATE TABLE `device_access_auth_list`  (
  `auth_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '权限id',
  `auth_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'apple权限值_c-z-ss',
  `auth_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '权限名称_z-c-ss-g',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '权限说明_z-s-c-g-ss',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `disable_value` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '禁用标识 <true/> 或者<false/>_z-s-c-g',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间_c',
  `default_status` int(1) NOT NULL COMMENT '默认状态_开启:1-关闭:0_z-s-c-g-ss',
  `is_show` int(1) NOT NULL COMMENT '是否展示_是:1-否:0_z-s-c-g-ss',
  PRIMARY KEY (`auth_id`) USING BTREE,
  INDEX `idx_auth_key_is_delete`(`auth_key`, `is_delete`) USING BTREE,
  INDEX `idx_auth_id_is_delete`(`auth_id`, `is_delete`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '设备访问限制权限表https://developer.apple.com/documentation/devicemanagement/restrictions' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of device_access_auth_list
-- ----------------------------
INSERT INTO `device_access_auth_list` VALUES ('1', 'allowEraseContentAndSettings', '禁止抹掉所有内容和设置', '禁止抹掉所有内容和设置', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('10', 'allowUntrustedTLSPrompt', '不允许建立不信任的tls链接', '不允许建立不信任的tls链接', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('11', 'allowFilesUSBDriveAccess', '\"文件\"APP无法访问USB驱动器', '\"文件\"APP无法访问USB驱动器', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('12', 'allowWebDistributionAppInstallation', '禁止网页分发APP', '禁止网页分发APP', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('2', 'allowHostPairing', '禁止itunes连接', '禁止itunes连接', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('3', 'allowEnterpriseAppTrust', '禁止信任App', '禁止信任App', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('4', 'allowUIConfigurationProfileInstallation', '禁止安装描述文件', '禁止安装描述文件', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('5', 'forceAutomaticDateAndTime', '禁止修改时间', '禁止修改时间', 0, '<true/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('6', 'allowVPNCreation', '禁止VPN连接', '禁止修改时间', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('7', 'allowAccountModification', '禁止修改ApplelD', '禁止修改ApplelD', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('8', 'allowWallpaperModification', '禁止修改壁纸', '禁止修改壁纸', 0, '<false/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('9', 'forceEncryptedBackup', '开启加密备份', '开启加密备份', 0, '<true/>', '2024-05-13 19:55:31', 1, 1);
INSERT INTO `device_access_auth_list` VALUES ('a0621a00fcd642c6800ecda35cf0f994', 'allowFindMyDevice', '不允许开启找查我的设备', '不允许开启找查我的设备', 0, '<false/>', '2024-07-19 00:35:19', 1, 1);

-- ----------------------------
-- Table structure for device_command_task
-- ----------------------------
DROP TABLE IF EXISTS `device_command_task`;
CREATE TABLE `device_command_task`  (
  `task_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'id',
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id',
  `main_cmd` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '主命令',
  `exec_result` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '执行返回结果',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `exec_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '执行时间',
  `result_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '返回时间',
  `task_status` int(1) NOT NULL COMMENT '任务状态_等待执行:0-唤醒已发送:1-命令已发送:2-命令执行成功:3-命令执行失败:4',
  `exec_result_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '执行返回状态码',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注',
  `cert_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书id',
  `udid` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `serial_number` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '序列号',
  `cmd` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '命令json',
  `task_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务名称',
  `wait_time` int(11) NOT NULL DEFAULT 60 COMMENT '等待设备超时时间 -1永久 秒',
  `task_type` int(1) NOT NULL COMMENT '任务类型_同步:1-异步:0',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`task_id`) USING BTREE,
  INDEX `idx_device_id_create_time`(`device_id`, `create_time`) USING BTREE,
  INDEX `idx_device_id`(`device_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '执行命令任务' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of device_command_task
-- ----------------------------

-- ----------------------------
-- Table structure for device_group_list
-- ----------------------------
DROP TABLE IF EXISTS `device_group_list`;
CREATE TABLE `device_group_list`  (
  `group_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '分组id',
  `group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '分组名称',
  `user_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '所属用户id',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`group_id`) USING BTREE,
  INDEX `idx_org_id_group_id_is_delete`(`org_id`, `group_id`, `is_delete`) USING BTREE,
  INDEX `idx_org_id_is_delete`(`org_id`, `is_delete`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '设备分组' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of device_group_list
-- ----------------------------

-- ----------------------------
-- Table structure for device_history_phone
-- ----------------------------
DROP TABLE IF EXISTS `device_history_phone`;
CREATE TABLE `device_history_phone`  (
  `ph_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '记录id',
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `phone` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '组织id',
  PRIMARY KEY (`ph_id`) USING BTREE,
  INDEX `idx_device_id_create_time`(`device_id`, `create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of device_history_phone
-- ----------------------------

-- ----------------------------
-- Table structure for device_info
-- ----------------------------
DROP TABLE IF EXISTS `device_info`;
CREATE TABLE `device_info`  (
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '设备id',
  `udid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '设备udid',
  `token` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '设备token',
  `magic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '向apns服务器唤醒设备的时候需要',
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '证书的topic id',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间',
  `mdm_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'mdm配置文件状态_已卸载:CheckOut-注册中:Authenticate-更新:TokenUpdate',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '备注',
  `abm_status` int(1) NOT NULL COMMENT 'abm状态_已绑定:1-未绑定:0',
  `device_last_call_date` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '设备最后通信时间',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `asset_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备标签',
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备颜色',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备描述',
  `device_assigned_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备分配的电子邮件',
  `device_assigned_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备分配mdm服务器的时间abm',
  `device_family` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'The device\'s Apple product family: iPad, iPhone, iPod, Mac, or AppleTV. This key is valid in X-Server-Protocol-Version 2 and later.',
  `model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备型号',
  `op_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ISO 8601格式的时间戳，表示设备何时被添加、更新或删除。如果增加了op_type的值，则与device_assigned_date相同。该字段仅适用于“同步设备列表”命令。',
  `op_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备最后状态_已添加:added-已删除:deleted-已修改:modified',
  `os` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备的操作系统：、或。iOSOSXtvOS此密钥在 X-Server-Protocol-Version 2 及更高版本中有效。随着 X-Server-Protocol-Version 7 及更高版本，iPad 产品操作系统将回归。iPadOS',
  `profile_assign_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ISO 8601 格式的时间戳，指示配置文件分配给设备的时间。',
  `profile_push_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ISO 8601 格式的时间戳，指示配置文件推送到设备的时间。',
  `profile_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'abm配置文件_空:empty-已分配:assigned-已推送:pushed-已删除:removed',
  `profile_uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '分配的配置文件的唯一 ID。',
  `serial_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备的序列号。',
  `ap_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'abm mdm服务器id',
  `app_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '预定义配置文件id',
  `lost_mode` int(1) NOT NULL COMMENT '丢失模式_已开启:1-已关闭:0',
  `activation_lock` int(1) NOT NULL COMMENT '激活锁_已开启:1-已关闭:0',
  `activation_lock_skip_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '激活锁跳过代码',
  `imei_one` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '卡1 imei',
  `imei_two` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '卡2 imei',
  `meid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'meid',
  `phone_one` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '卡1手机号',
  `phone_two` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '卡2手机号',
  `t_mobile_one` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '卡1运营商',
  `t_mobile_two` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '卡2运营商',
  `device_other_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备其他信息存储大文件',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户ID',
  `cert_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '推送证书id',
  `product_type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备类型 解锁激活锁用',
  `control_status` int(1) NOT NULL COMMENT '监管状态_监管中:1-已脱管:0',
  `user_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '用户手机号',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '用户姓名',
  `lost_mode_msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '丢失模式消息',
  `lost_mode_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '丢失消息描述',
  `lost_mode_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '丢失模式手机号',
  `activation_lock_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '激活锁key',
  `activation_lock_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '激活锁hash',
  `device_status_notify_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备状态通知url 如果为空则不通知',
  `auto_lost_mode_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '自动锁机时间',
  `last_lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '最后一次定位的纬度',
  `last_lon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '最后一次的经度',
  `last_addr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '最后的地址',
  `device_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备ip',
  `device_ip_addr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备ip地址',
  `is_trash` int(1) NOT NULL DEFAULT 0 COMMENT '是否在回收站_是:1-否:0',
  `group_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属分组id',
  `device_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备名称',
  `battery_level` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '电池电量',
  `available_device_capacity` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '剩余存储空间',
  `sys_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '系统备注',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`device_id`) USING BTREE,
  INDEX `idx_ap_id`(`ap_id`) USING BTREE,
  INDEX `idx_device_id`(`device_id`) USING BTREE,
  INDEX `idx_org_id_serial_number`(`org_id`, `serial_number`) USING BTREE,
  INDEX `idx_device_id_user_id_is_delete`(`device_id`, `user_id`, `is_delete`) USING BTREE,
  INDEX `idx_device_id_org_id_is_delete`(`device_id`, `org_id`, `is_delete`) USING BTREE,
  INDEX `idx_org_id_lost_mode_is_delete`(`org_id`, `lost_mode`, `is_delete`) USING BTREE,
  INDEX `idx_device_last_call_date`(`device_last_call_date`) USING BTREE,
  INDEX `idx_group_id`(`group_id`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '注册的设备信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of device_info
-- ----------------------------

-- ----------------------------
-- Table structure for device_info_other
-- ----------------------------
DROP TABLE IF EXISTS `device_info_other`;
CREATE TABLE `device_info_other`  (
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id',
  `udid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '设备udid',
  `device_info_xml` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备信息',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户ID',
  `serial_number` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '序列号',
  `unlock_token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '给设备发送命令配置文件里需要用到',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`device_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '注册的设备信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of device_info_other
-- ----------------------------

-- ----------------------------
-- Table structure for device_ip_history
-- ----------------------------
DROP TABLE IF EXISTS `device_ip_history`;
CREATE TABLE `device_ip_history`  (
  `log_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ip',
  `region` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '地址',
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`log_id`) USING BTREE,
  INDEX `device_id_and_ip`(`device_id`, `ip`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '设备ip历史记录' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of device_ip_history
-- ----------------------------

-- ----------------------------
-- Table structure for device_mdm_profile
-- ----------------------------
DROP TABLE IF EXISTS `device_mdm_profile`;
CREATE TABLE `device_mdm_profile`  (
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id',
  `profile_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '配置文件路径',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间',
  `udid` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备udid',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `cert_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '推送证书id',
  `serial_number` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '序列号',
  `access_profile_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '访问限制配置路径',
  `lock_msg_before` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '锁屏前置信息',
  `lock_msg_after` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '锁屏后置信息',
  `lock_msg_status` int(1) NOT NULL COMMENT '锁屏信息状态_开启:1-关闭:0',
  `access_app_list` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '允许或者不允许app列表id 例子 123,23',
  `access_app_type` int(1) NOT NULL COMMENT 'app访问限制类型_允许所有:1-允许部分app:2-不允许部分app:3',
  `access_auth_list` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '访问权限列表 id列表 例子 123,312',
  `wallpaper_type` int(1) NOT NULL COMMENT '设置壁纸类型_锁屏:1-主屏幕:2-锁屏和主屏幕:3',
  `wallpaper_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '壁纸id',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  `disable_erase` int(1) NOT NULL COMMENT '是否开启远程管理按钮限制_是:1-否:0',
  PRIMARY KEY (`device_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '设备对应的mdm服务器配置文件' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of device_mdm_profile
-- ----------------------------

-- ----------------------------
-- Table structure for lost_msg_list
-- ----------------------------
DROP TABLE IF EXISTS `lost_msg_list`;
CREATE TABLE `lost_msg_list`  (
  `lost_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '消息id',
  `lost_msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '提示',
  `lost_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '描述',
  `lost_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `lost_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '消息名称',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`lost_id`) USING BTREE,
  INDEX `idx_org_id_lost_id_is_delete`(`org_id`, `lost_id`, `is_delete`) USING BTREE,
  INDEX `idx_org_id_is_delete`(`org_id`, `is_delete`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = sjis COLLATE = sjis_japanese_ci COMMENT = '丢失消息模版' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lost_msg_list
-- ----------------------------

-- ----------------------------
-- Table structure for mdm_cert
-- ----------------------------
DROP TABLE IF EXISTS `mdm_cert`;
CREATE TABLE `mdm_cert`  (
  `cert_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书id',
  `topic_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书id信息 也是topic 推送需要使用 唯一 ',
  `p12_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书路径 如 ./data/p12.p12',
  `cert_name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书名',
  `p12_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书密码',
  `cert_status` int(1) NOT NULL COMMENT '状态_正常:1-过期:2-吊销:3-禁用:0',
  `serial_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '证书信息serial_number',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `start_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '证书有效期起始时间',
  `end_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '证书有效期结束时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注',
  `mobile_config_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '配置文件初始化路径',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `is_public` int(1) NOT NULL COMMENT '是否公有_是:1-否:0',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`cert_id`) USING BTREE,
  INDEX `idx_org_id_cert_id_is_delete`(`org_id`, `cert_id`, `is_delete`) USING BTREE,
  INDEX `idx_cert_id_is_public_is_delete`(`cert_id`, `is_public`, `is_delete`) USING BTREE,
  INDEX `idx_topic_id_is_delete`(`topic_id`, `is_delete`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'mdm证书表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mdm_cert
-- ----------------------------

-- ----------------------------
-- Table structure for sys_settings
-- ----------------------------
DROP TABLE IF EXISTS `sys_settings`;
CREATE TABLE `sys_settings`  (
  `s_key` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '键',
  `s_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '键值',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注',
  PRIMARY KEY (`s_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_settings
-- ----------------------------
INSERT INTO `sys_settings` VALUES ('apiPassword', '123144', '2024-06-27 12:59:59', '2024-07-28 20:18:02', 'api注册接口秘钥');
INSERT INTO `sys_settings` VALUES ('autoCloseAuthTime', '0', '1970-01-01 00:00:00', '2024-07-28 20:18:02', '设备访问限制修改后自动关闭时间/ 秒 为0则不使用');
INSERT INTO `sys_settings` VALUES ('deviceStatusCheckTime', '3600', '2024-06-28 12:10:23', '2024-07-28 20:18:02', '设备状态检测时间 /秒');
INSERT INTO `sys_settings` VALUES ('deviceTaskNoWaitRetryTime', '60', '2024-06-29 10:01:45', '2024-07-28 20:18:02', '异步任务超过这个时间没有报到 则重试推送 /秒');
INSERT INTO `sys_settings` VALUES ('deviceTaskNoWaitTime', '31622400', '2024-06-28 20:39:26', '2024-07-28 20:18:02', '非等待命令过期时间 /秒');
INSERT INTO `sys_settings` VALUES ('deviceTaskWaitTime', '30', '2024-06-27 14:26:32', '2024-07-28 20:18:02', '设备等待超时时间/秒');
INSERT INTO `sys_settings` VALUES ('disableQuitRemoteManage', '1', '1970-01-01 00:00:00', '2024-07-31 12:11:29', '禁止退出远程管理 1是 0否');
INSERT INTO `sys_settings` VALUES ('domain', 'mdm.ppgjx.com', '2024-06-27 13:00:19', '2024-07-28 20:18:02', '域名');
INSERT INTO `sys_settings` VALUES ('httpPac', 'https://admin.mdm.top/conf/http.pac', '1970-01-01 00:00:00', '2024-08-05 23:07:38', 'httpPac代理文件url');
INSERT INTO `sys_settings` VALUES ('loginCode', '0', '2024-07-04 14:50:03', '2024-07-28 20:18:02', '登录验证码 1开启 0关闭');
INSERT INTO `sys_settings` VALUES ('mailConnectionTimeout', '0', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailConnectionTimeout ');
INSERT INTO `sys_settings` VALUES ('mailFrom', '2394197228@qq.com', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailFrom');
INSERT INTO `sys_settings` VALUES ('mailHost', 'smtp.qq.com', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailHost');
INSERT INTO `sys_settings` VALUES ('mailPass', 'azwzwfwgkjsnecfh', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailPass');
INSERT INTO `sys_settings` VALUES ('mailPort', '465', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailPort');
INSERT INTO `sys_settings` VALUES ('mailSocketFactoryClass', 'javax.net.ssl.SSLSocketFactory', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailSocketFactoryClass');
INSERT INTO `sys_settings` VALUES ('mailSocketFactoryFallback', 'true', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailSocketFactoryFallback');
INSERT INTO `sys_settings` VALUES ('mailSocketFactoryPort', '465', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailSocketFactoryPort');
INSERT INTO `sys_settings` VALUES ('mailSslEnable', 'true', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailSslEnable');
INSERT INTO `sys_settings` VALUES ('mailStarttlsEnable', 'true', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailStarttlsEnable');
INSERT INTO `sys_settings` VALUES ('mailTimeout', '0', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailTimeout');
INSERT INTO `sys_settings` VALUES ('mailUser', '2394197228@qq.com', '2024-06-27 12:38:21', '2024-07-28 20:18:02', 'mailUser');
INSERT INTO `sys_settings` VALUES ('taskErrRetry', '300', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '任务失败重试时间 /秒');
INSERT INTO `sys_settings` VALUES ('wxAppid', '', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '微信小程序appid');
INSERT INTO `sys_settings` VALUES ('wxAppSecret', '', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '微信小程序appSecret');
INSERT INTO `sys_settings` VALUES ('wxWorkAesKey', '', '1970-01-01 00:00:00', '2024-07-31 19:42:25', '企业微信AesKey');
INSERT INTO `sys_settings` VALUES ('wxWorkAgentId', '', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '企业微信AgentId');
INSERT INTO `sys_settings` VALUES ('wxWorkCorpId', '', '1970-01-01 00:00:00', '2024-07-31 19:42:25', '企业微信CorpId');
INSERT INTO `sys_settings` VALUES ('wxWorkSecret', '', '1970-01-01 00:00:00', '1970-01-01 00:00:00', '企业微信Secret');
INSERT INTO `sys_settings` VALUES ('wxWorkToken', '', '1970-01-01 00:00:00', '2024-07-31 19:42:25', '企业微信token');

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test`  (
  `ids` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '账号id',
  `is_user` int(1) NOT NULL COMMENT '是否用户_是:1-否:0_z-s-c-g',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '状态_正常:1-禁用:0_z-s-c-g',
  `test` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '测试_z-s-c-g',
  PRIMARY KEY (`ids`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id_c-ss',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码_z',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间_c',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间_c',
  `last_login_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '最后登录时间_c',
  `last_login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '最后登录ip_c',
  `status` int(1) NOT NULL COMMENT '状态_正常:1-封禁:0_g-z-c',
  `region` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '地址_c-z',
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '邮箱_c-ss-z',
  `account` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '账号_c-ss-z',
  `auth_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '二级密码_g-z',
  `amount` int(11) NOT NULL COMMENT '可添加设备数量_c-g-z',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名_c-ss-z',
  `user_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户手机号_c-ss-z',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '机构id',
  `salt` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码盐',
  `auth_salt` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '二级密码盐',
  `user_type` int(1) NOT NULL COMMENT '类型_管理员:1-普通用户:2-员工:3_c-ss-z',
  `share_amount` int(1) NOT NULL COMMENT '共享商家额度_是:1-否:0',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `idx_email`(`email`) USING BTREE,
  INDEX `idx_account`(`account`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('addcab9ecfd741b6ae80b8bd6ff43093', '373cd7298b15a27d5aa79c4315d34fec0b8a8fbf', '2024-07-11 13:48:56', '2024-07-11 13:48:56', '2024-07-11 13:48:56', '223.242.11.245', 1, '中国|0|安徽省|六安市|电信', '252493133@qq.com', 'super', 'cc176bf53f76d8d3045ea825eae10012e5aed8df', 112, '', '', 'addcab9ecfd741b6ae80b8bd6ff43093', '170', '156', 1, 0);

-- ----------------------------
-- Table structure for user_add_user_relation
-- ----------------------------
DROP TABLE IF EXISTS `user_add_user_relation`;
CREATE TABLE `user_add_user_relation`  (
  `re_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '关系id',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id__c-ss',
  `boss_user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'boss用户id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`re_id`) USING BTREE,
  INDEX `boss`(`boss_user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '普通用户添加普通用户关系表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_add_user_relation
-- ----------------------------

-- ----------------------------
-- Table structure for user_amount_flow
-- ----------------------------
DROP TABLE IF EXISTS `user_amount_flow`;
CREATE TABLE `user_amount_flow`  (
  `flow_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '流水id_c',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id_c-ss',
  `type` int(4) NOT NULL COMMENT '流水类型_收入:1-支出:0_c-ss',
  `amount` int(11) NOT NULL COMMENT '设备数量_c',
  `after_amount` int(11) NOT NULL COMMENT '操作后设备数量_c',
  `remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注_c',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '进行时间_c',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '修改时间',
  `before_amount` int(11) NOT NULL COMMENT '操作前设备数量_c',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`flow_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户账户变动流水表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_amount_flow
-- ----------------------------

-- ----------------------------
-- Table structure for user_device_access_app_list
-- ----------------------------
DROP TABLE IF EXISTS `user_device_access_app_list`;
CREATE TABLE `user_device_access_app_list`  (
  `app_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '名称',
  `build_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '包名',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `appstore_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'appstore链接',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'icon',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `app_type` int(1) NOT NULL COMMENT 'app类型_appstore:1-自定义:2',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `default_select` int(1) NOT NULL COMMENT '默认选中_是:1-否:0',
  `is_public` int(1) NOT NULL COMMENT '是否公有_是:1-否:0',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`app_id`) USING BTREE,
  INDEX `idx_org_id_app_id_is_delete`(`org_id`, `app_id`, `is_delete`) USING BTREE,
  INDEX `idx_org_id_build_id_is_delete`(`org_id`, `build_id`, `is_delete`) USING BTREE,
  INDEX `idx_org_id_is_delete`(`org_id`, `is_delete`) USING BTREE,
  INDEX `idx_is_public_is_delete`(`is_public`, `is_delete`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '设备访问限制app使用列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_device_access_app_list
-- ----------------------------

-- ----------------------------
-- Table structure for user_device_add_account
-- ----------------------------
DROP TABLE IF EXISTS `user_device_add_account`;
CREATE TABLE `user_device_add_account`  (
  `account` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '账号_c-ss-z',
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码_c-g-z',
  `create_time` datetime NOT NULL COMMENT '创建时间_c',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属用户id',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注_c-g-z',
  `user_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名_c-ss-z-g',
  `user_phone` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号_c-ss-z-g',
  PRIMARY KEY (`account`) USING BTREE,
  INDEX `idx_account`(`account`) USING BTREE,
  INDEX `idx_account_user_id`(`account`, `user_id`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = sjis COLLATE = sjis_japanese_ci COMMENT = '用户添加设备的专用账号密码' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_device_add_account
-- ----------------------------

-- ----------------------------
-- Table structure for user_device_add_log
-- ----------------------------
DROP TABLE IF EXISTS `user_device_add_log`;
CREATE TABLE `user_device_add_log`  (
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id_c-ss',
  `device_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备id_c-ss',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `serial_number` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '设备序列号_c-ss',
  `account` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '账号_c-ss',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  INDEX `all`(`org_id`, `serial_number`, `account`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_device_add_log
-- ----------------------------

-- ----------------------------
-- Table structure for user_device_wallpaper_list
-- ----------------------------
DROP TABLE IF EXISTS `user_device_wallpaper_list`;
CREATE TABLE `user_device_wallpaper_list`  (
  `wp_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '壁纸id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '名称',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `wp_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'wp链接',
  `is_delete` int(1) NOT NULL COMMENT '是否删除_是:1-否:0',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `wp_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'wp路径',
  `is_public` int(1) NOT NULL COMMENT '是否公有_是:1-否:0',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`wp_id`) USING BTREE,
  INDEX `idx_org_id_wp_id_is_delete`(`org_id`, `wp_id`, `is_delete`) USING BTREE,
  INDEX `idx_wp_id_is_public_is_delete`(`wp_id`, `is_public`, `is_delete`) USING BTREE,
  INDEX `idx_create_time_desc`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '设备访问限制app使用列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_device_wallpaper_list
-- ----------------------------

-- ----------------------------
-- Table structure for user_login_record
-- ----------------------------
DROP TABLE IF EXISTS `user_login_record`;
CREATE TABLE `user_login_record`  (
  `log_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '日志id',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `login_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '登录时间',
  `login_ip` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '登录ip',
  `ip_addr` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ip所在位置',
  `create_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '备注',
  `login_status` int(1) NOT NULL COMMENT '登录状态_登录成功:1-登录失败:0',
  `login_type` int(1) NOT NULL COMMENT '登录类型_邮箱:1-账号:2',
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  PRIMARY KEY (`log_id`) USING BTREE,
  INDEX `create_time`(`create_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户登录与时长表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_login_record
-- ----------------------------

-- ----------------------------
-- Table structure for user_settings
-- ----------------------------
DROP TABLE IF EXISTS `user_settings`;
CREATE TABLE `user_settings`  (
  `org_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '组织id',
  `config` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '配置信息 ',
  PRIMARY KEY (`org_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户配置' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_settings
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
