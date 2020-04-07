select * from estados e, cidades c
where e.id = c.estado_id
-- Fazer associação cidade mais estado


select e.nome, c.nome, e.regiao from estados e, cidades c
where e.id = c.estado_id;
-- Iguais
select e.nome as estado, c.nome as cidade, e.regiao as Região from estados e, cidades c
where e.id = c.estado_id;


select 
    c.nome as Cidade,
    e.nome as Estado, 
    regiao as Região
from estados e inner join cidades c on e.id = c.estado_id
-- Print cidade estado e região