select * from estados

INSERT INTO cidades (nome, area, estado_id )
VALUES ('Campinas', 795, 25)

INSERT INTO cidades (nome, area, estado_id )
VALUES ('Niterio', 133.9, 19)

select * from cidades


INSERT INTO cidades (nome, area, estado_id)
VALUES ('Maceió', 920, (select id from estados where sigla = 'AL'))


INSERT INTO cidades (nome, area, estado_id)
VALUES ('Juazeriro do Norte', 920, (select id from estados where sigla = 'CE'))