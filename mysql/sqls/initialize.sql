DROP DATABASE IF EXISTS myapp;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY(id)
); 