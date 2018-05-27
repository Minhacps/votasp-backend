# Public Answers API
Essa api é responsável por mostrar as respostas dos candidatos de forma publica.
Ela não tem autenticação e mostra apenas os dados dos candidatos.

É necessário de alguma forma armazenarmos também o email publico do candidato aqui. Assim facilita checarmos a informação

# Rotas

## GET /
Obtem todas as respostas de todos os candidatos. (Necessário para os public workers)
- Param `since` - Como os candidatos não podem alterar suas questões, podemos usar esse parametro para diminuir o trafego de dados para os public workers.

## GET /:email
Obtem todas as respostas de um unico candidato pelo email cadastrado.

## GET /verify/:email
Apenas verifica se um email contém ou não respostas (Necessário para o bot do twitter)
Essa rota não precisa retornar conteúdo.


Caso você tenha alguma idéia de como melhorar, abra uma issue ou converse com a gente no nosso discord.
