DROP DATABASE IF EXISTS photoapp;

CREATE DATABASE photoapp;

USE photoapp;

CREATE TABLE photos (
  id int,
  name VARCHAR(255),
  url VARCHAR(255),
  PRIMARY KEY (id)
);