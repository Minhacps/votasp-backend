# Answers API
Essa API é responsável por listar, editar, visualizar e remover respostas de um usuário.

As informações do usuário geralmente serão passadas por meio de um token JWT. Você precisará do ID do usuário e se ele é ou não um candidato.

Para desenvolver aqui, você vai precisar se comunicar principalmente com o pessoal de `front-end` e o pessoal da `Public Answers API`.

### Atenção
É de extrema importancia que os usuários não possam ver as respostas uns dos outros.

Para ler respostas públicas vamos usar a [Public Answers API](https://github.com/Minhacps/votasp-backend/tree/master/api-public-answers). Foque apenas nas próprias questões de cada usuário.

Também pensamos em dividir o banco entre respostas públicas e privadas, pois apenas os eleitores devem ter acesso a suas próprias respostas.


## Respostas
Respostas seguem as seguintes regras:
  - Todos os usuários podem preencher as questões com:
    - Concordo Plenamente
    - Concordo
    - Discordo
    - Discordo Plenamente

  - Eleitores podem ignorar a questões, candidatos não podem.


## Mock API

Por hora temos uma versão mockada da API, para uso durante o desenvolvimento do frontend. A [especificação atual](/api-answers/mock/api.yml) é somente uma proposta, e pode ser alterada caso necessário

### Iniciando

Para iniciar o mock da api basta executar, nesta pasta:
```
docker-compose -f docker-compose.mock.yml up
```

A api estará disponível em (http://answers.votasp.local/)

Se desejar que o comando seja executado em background, basta executar com a opção `-d`:
```
docker-compose -f docker-compose.mock.yml up -d
```

E quando desejar desativa-lo:
```
docker-compose -f docker-compose.mock.yml down
```

### Documentação

Após levantar o mock, a documentação estará disponível em (http://answers.votasp.local/swagger/)
