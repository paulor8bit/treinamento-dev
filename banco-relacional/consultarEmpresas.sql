--mostra apenas as sedes
SELECT e.nome, c.nome
from empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede
