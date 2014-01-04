CREATE TABLE `goodAreacodes` (
  `areacode` VARCHAR(3) NOT NULL,
  `state` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  INDEX `IX_goodAreacodes_areacode` (`areacode`)
)
ENGINE=InnoDB;
