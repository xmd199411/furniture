CREATE DATABASE pj CHARSET=UTF8;
USE pj;
SET NAMES GBK;
CREATE TABLE pj_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname	VARCHAR(50),
upwd	VARCHAR(32)
);
INSERT INTO pj_user VALUES(null,'xumaodong','123456');
CREATE TABLE pj_product(
pid INT PRIMARY KEY AUTO_INCREMENT,
price DOUBLE(6,2),
pic VARCHAR(100)
);

INSERT INTO pj_product VALUES(null,80,'img/product/1.jpg');
INSERT INTO pj_product VALUES(null,85,'img/product/2.jpg');
INSERT INTO pj_product VALUES(null,90,'img/product/3.jpg');
INSERT INTO pj_product VALUES(null,95,'img/product/4.jpg');
INSERT INTO pj_product VALUES(null,100,'img/product/5.jpg');
INSERT INTO pj_product VALUES(null,120,'img/product/6.jpg');
INSERT INTO pj_product VALUES(null,140,'img/product/7.jpg');
INSERT INTO pj_product VALUES(null,160,'img/product/8.jpg');
INSERT INTO pj_product VALUES(null,180,'img/product/9.jpg');
INSERT INTO pj_product VALUES(null,200,'img/product/10.jpg');
INSERT INTO pj_product VALUES(null,170,'img/product/11.jpg');
INSERT INTO pj_product VALUES(null,135,'img/product/12.jpg');


CREATE TABLE pj_cart(
cid INT PRIMARY KEY AUTO_INCREMENT,
uid INT,
pid INT,
count INT
);

INSERT INTO pj_cart VALUES(null,1,1,1);
INSERT INTO pj_cart VALUES(null,1,2,1);

CREATE TABLE pj_tubiao(
tid INT PRIMARY KEY AUTO_INCREMENT,
tpic VARCHAR(50)
);
INSERT INTO pj_tubiao VALUES(null,'img/brand/1.jpg');
INSERT INTO pj_tubiao VALUES(null,'img/brand/2.jpg');
INSERT INTO pj_tubiao VALUES(null,'img/brand/3.jpg');
INSERT INTO pj_tubiao VALUES(null,'img/brand/4.jpg');
INSERT INTO pj_tubiao VALUES(null,'img/brand/5.jpg');