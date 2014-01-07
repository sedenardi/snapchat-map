CREATE TABLE `goodareacodes` (
  `areacode` VARCHAR(3) NOT NULL,
  `state` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `lat` VARCHAR(20) NOT NULL,
  `lon` VARCHAR(20) NOT NULL,
  INDEX `IX_goodAreacodes_areacode` (`areacode`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;
