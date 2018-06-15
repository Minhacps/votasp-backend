# Questions API
Essa API é responsável por prover as questões que serão analisadas por candidatos e eleitores.

Se for necessário adicionar mais campos, converse com o pessoal que está formulando as questões.

Por hora temos uma versão mockada da API, para uso durante o desenvolvimento do frontend. A [especificação atual](/api-questions/mock/api.yml) é somente uma proposta, e pode ser alterada caso necessário 

### Iniciando em modo de deselvolvimento

Neste modo, a aplicação é executada com o [nodemon](https://github.com/remy/nodemon), então qualquer alteração no código fonte faz com que a aplicação seja reiniciada automaticamente.

Para iniciar a versão de desenvolvimento da api basta executar, nesta pasta:
```
docker-compose up
```

A api estará disponível em (http://questions.votasp.local/)
Quando o código fonte for alterado, a aplicação reiniciará automaticamente

Se desejar que o comando seja executado em background, basta executar com a opção `-d`:
```
docker-compose up -d
```

E quando desejar desativá-lo:
```
docker-compose down
```

### Iniciando em modo de produção

Neste modo não está configurado o nodemon:
```
docker-compose -f docker-compose.yml up
```

### Atualizando dependências

Caso haja alteraçao das dependências da aplicação, você pode atualizá-la executando:
```
docker-compose build
```

### Documentação

Após levantar a api, a documentação estará disponível em (http://questions.votasp.local/documentation)
