CREATE DATABASE catalogoFilmeDB;

USE catalogoFilmeDB;

CREATE TABLE filme (
    id_filme INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(300),
    sinopse VARCHAR(4000),
    avaliacao DECIMAL(15, 1),
    lancamento DATETIME,
    disponivel BOOLEAN,
    genero VARCHAR(100),
    img VARCHAR(800)
);

CREATE TABLE usuario (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(300),
    email VARCHAR(300),
    senha VARCHAR(300)
);

