create table IF NOT EXISTS prefeitos ( 
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    UNIQUE KEY (id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
   
);

-- Unique Key é que fazer ser um para um