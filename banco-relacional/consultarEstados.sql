SELECT * FROM estados
-- use o CTRL+SHIF+E com texto selecionado
SELECT nome, sigla from estados

select Sigla, nome as 'Nome do Estado' from estados



select Sigla, nome as 'Nome do Estado' from estados
WHERE regiao = 'Nordeste'

SELECT nome, regiao from estados 
WHERE populacao >= 10


-- Filtra população de ordem decresente apenas com mais de 10
SELECT nome, regiao from estados 
WHERE populacao >= 10
ORDER BY populacao

SELECT nome, regiao, populacao from estados 
WHERE populacao >= 10
ORDER BY populacao desc