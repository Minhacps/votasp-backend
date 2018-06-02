# Questions API
Essa API é responsável por prover as perguntas que serão feitas para candidatos e eleitores.

Se for necessário adicionar mais campos, converse com o pessoal que está formulando as perguntas.

## Mock API

Por hora temos uma versão mockada da API, para uso durante o desenvolvimento do frontend. A [especificação atual](/api-questions/mock/api.yml) é somente uma proposta, e pode ser alterada caso necessário 

### Iniciando

Para iniciar o mock da api basta executar, nesta pasta:
```
docker-compose -f docker-compose.mock.yml up
```

A api estará disponível em (http://questions.votasp.local/)

Se desejar que o comando seja executado em background, basta executar com a opção `-d`:
```
docker-compose -f docker-compose.mock.yml up -d
```

E quando desejar desativa-lo:
```
docker-compose -f docker-compose.mock.yml down
```

### Documentação

Após levantar o mock, a documentação estará disponível em (http://questions.votasp.local/swagger)
