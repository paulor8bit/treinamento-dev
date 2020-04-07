select regiao as 'Região', sum (populacao) as Total
from estados
GROUP BY regiao
order by Total desc

-- Total
select sum (populacao) as Total from estados

-- media
select avg (populacao) as Total from estados

SELECT * FROM estados
