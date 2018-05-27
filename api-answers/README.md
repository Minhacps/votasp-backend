# Answers API
Essa API é responsável por listar, editar, visualizar e remover respostas de um usuário.

As informações do usuário geralmente serão passadas por meio de um token JWT. Você precisará do ID do usuário e se ele é ou não um candidato.

Para desenvolver aqui, você vai precisar se comunicar principalmente com o pessoal de `front-end` e o pessoal da `Public Answers API`.

### Atenção
É de extrema importancia que outros usuários não possam ver respostas de uns dos outros.

Para ler respostas públicas vamos usar a [Public Answers API](https://github.com/Minhacps/votasp-backend/tree/master/api-public-answers). Foque apenas nas próprias perguntas de cada usuário.

Também pensamos em dividir o banco entre respostas públicas e privadas, pois apenas os eleitores devem ter acesso a suas próprias respostas.


## Respostas
Respostas seguem as seguintes regras:
  - Todos os usuários podem preencher as perguntas com:
    - Concordo Plenamente
    - Concordo
    - Discordo
    - Discordo Plenamente

  - Eleitores podem ignorar a questões, candidatos não podem.


## Rotas

### GET /
obtem todas as respostas que o usuário preencheu

### PUT /:questionId
Atualiza/Adiciona resposta a essa questão.

### PUT /
Atualiza/Adiciona um array de respostas. (Substitua sempre os mesmos ID's)

### DELETE /:questionId
Deleta uma resposta do usuário.


## Estruturas básicas
### Conjunto de respostas
Devem ter um `userId` e um array de respostas.

### Respostas
Devem ter um `questionId` e uma das opções:
  - Concordo Plenamente
  - Concordo
  - Discordo
  - Discordo Plenamente


Se você achar de mudar alguma coisa ou adicionar uma nova regra, converse com o time.
