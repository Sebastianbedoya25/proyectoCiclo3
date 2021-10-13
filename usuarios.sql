CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE usuarios

(
id int not null primary key,
usuario varchar(256) not null,
contrasena varchar(256) not null,
edad int not null,
fecha_registro int not null default 2021

);

INSERT INTO usuarios values(1, 'username1', 'contrasenaSegura', 19, 2021);
INSERT INTO usuarios values(2, 'username2', '123456', 25, 2021);
INSERT INTO usuarios values(3, 'username3', 'contrasena123', 33; 2021);