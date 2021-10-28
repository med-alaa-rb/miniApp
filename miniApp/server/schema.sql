DROP DATABASE IF EXISTS miniappdb;
CREATE DATABASE miniappdb;
USE miniappdb;

CREATE TABLE dbtable(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR (15) NOT NULL,
    favColor  VARCHAR (10),
    choice VARCHAR (10),
    post VARCHAR (500)
);