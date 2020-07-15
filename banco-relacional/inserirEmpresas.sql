insert into empresas 
    (nome, cnpj)
Values 
('Bradesco', 879874564985), 
('Vale', 879874564986),
('Cielo', 879874564987);


-- Mudar tipo de tabela
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

desc empresas;
select * from empresas; 
select * from cidades; 


insert into empresas_unidades
    (empresa_id, cidade_id, sede)
Values
(1, 1, 1),
(1, 2, 0),
(2, 1, 0),
(2, 2, 1);