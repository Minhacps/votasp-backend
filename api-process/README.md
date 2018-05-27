# Process API
Uma das APIs mais importantes do sistema.

Ela é responsável por enviar e responder sobre o processamento do dos matches.

Será ela a responsável por receber requests dos usuários para começar a processar as informações.
Ela também envia mensagens para o `message broker` para que seja direcionado aos `public workers`.
Após isso, ela recebe mensagens do `message broker` que tenham sido processadas e responde o usuário.

PS: pensamos primariamente em desenvolver a api com HTTP, mas se achar necessário, podemos usar outra forma como um WebSocket.

## Rotas

### PUT /
Essa rota pega o token JWT do usuário, obtendo o `id` do mesmo e buscando as respostas no banco de dados.

Com isso, ela publica uma mensagem na fila `to process`, com todas as respostas e id.


Com isso, ela está inscrita em uma fila `checked` aguardando a resposta para esse id de usuário retornar.

Quando essa mensagem é recebida, ela responde o usuário sobre o resultado, que está contído nessa resposta.




##### Caso você tenha alguma idéia do que podemos melhorar, converse com a gente no discord abra uma issue.
