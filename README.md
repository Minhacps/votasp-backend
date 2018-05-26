# VotaSP - Back-end

Esse repositório contém códigos referentes ao back-end do VotaSP. O repositório principal é VotaSP é [esse aqui](https://github.com/minhacps/votasp)

Se pudéssemos resumir a arquitetura em uma única imagem, seria algo do tipo:
![Diagrama representando a arquitetura de microserviços](https://user-images.githubusercontent.com/903193/40364158-f93d35f4-5da7-11e8-8ba8-964a43549505.png)


## Front-end (amarelo)
O código do front-end pode ser encontrado [aqui](https://github.com/minhacps/votasp-app)

## API's (verde e rosa)
Cada uma de nossas API's tem responsábilidades definidas e por si só são bem simples.

A idéia de termos feito dessa maneira é possibilitar que qualquer outra comunidade possa ajudar na linguagem que domina.

Já o `API Gateway` é responsável por transformar multiplas APIs em uma única. Ele existe para simplificar o desenvolvimento do Front-end.

### Answers API
Essa api é responsável armazenar e ler as respostas dos usuários.

Ela também pode escrever (apenas) respostas dos candidatos. (podemos dividi-la se acharem melhor)

Você pode ler mais sobre ela [aqui](https://github.com/Minhacps/votasp-backend/tree/master/api-answers).

### Questions API
Essa api é responsável por ler as perguntas. Como essas perguntas são fixas, podemos pensar em uma forma simples e rápida de entrega.

Você pode ler mais sobre ela [aqui](https://github.com/Minhacps/votasp-backend/tree/master/api-questions).

### Process API
Essa api é responsável por processar a informação e fazer o match para o usuário.

Ela é a mais complexa e você pode ler mais sobre ela [aqui](https://github.com/Minhacps/votasp-backend/tree/master/api-process)

### Public Answers API
Essa api é responsável por ler as respostas dos candidatos e disponibiliza-las de forma pública.
A idéia por trás dessa API é possibilitar que projetos externos se conectem a ela. Assim poderemos usar esses dados de forma mais eficiente, já que as respostas dos candidatos são públicas.

Você pode ler mais sobre ela [aqui](https://github.com/Minhacps/votasp-backend/tree/master/api-public-answers).


## Workers (nossos guerreirinhos!) (Vermelhos)
Esses caras vão fazer o trabalho pesado do nosso projeto. Eles é quem vão fazer o match pra gente.

### Public Worker
Esse worker fará o processo de match que está sendo definido na nossa [Prova de Conceito](https://github.com/Minhacps/votasp-poc-matcher).

Nossa idéia para esse worker é que ele fosse público para qualquer pessoa instalar em sua maquina para ajudar a processar essas informações. (A idéia inicial é ele ser publico, mas se tivermos alguma dificuldade, usaremos ele internamente.)

Por ele ser público vai nos ajudar a diminuir os custos com os servidores. Assim ficará mais fácil chegarmos a uma escala estadual ou até mesmo nacional se for preciso.

Você pode ler mais sobre ele [aqui](https://github.com/Minhacps/votasp-backend/tree/master/worker-public).

### Checker Worker
Esse worker fará o processo de validação dos public workers. Como enviamos a mesma verificação para vários workers, ele é o responsável por agrupar essa informação e checar se houve alguma fraude.

Você pode ler mais sobre ele [aqui](https://github.com/Minhacps/votasp-backend/tree/master/worker-checker)


## Message Broker (Cinza)
Esse serviço é responsável por entregar as mensagens e organizar a fila de entrega das mesmas.
Já existem projetos prontos como o RabbitMQ que até onde estamos vendo atendem nossas necessidades.

Você pode ler mais sobre ele [aqui](https://github.com/Minhacps/votasp-backend/tree/master/message-broker).

## Bancos de dados
São eles responsáveis por armazenar os dados da nossa aplicação. Estamos abertos a como eles serão montados, mas devem ser simples para os times que implementarão as API's que consomem deles.

### Answers DB
Armazenam informações das respostas dos usuários.

Você pode ler mais sobre ele [aqui](https://github.com/Minhacps/votasp-backend/tree/master/api-answers/DB.md).

### Process DB
Armazena as informações de processamento. Ele é um cache para não precisarmos ficar refazendo os calculos o tempo todo.

Você pode ler mais sobre ele [aqui](https://github.com/Minhacps/votasp-backend/tree/master/api-process/DB.md).


## Serviços externos
Usaremos o Auth0 e teremos um bot no twitter.

### Auth0
Nossos únicos dados de usuários ficam armazenados lá. A idéia é ter apenas dados relacionados a autenticação do usuário, quanto menos informação coletarmos, mais anonimato daremos aos usuários.

Com isso, todos os outros serviços só precisam ter acesso ao id do usuário e se ele é um candidado ou não.

### Twitter Bot
Esse serviço é responsável por pressionar os candidados a responder as questões. (Gostei bastante do conceito que a Rosie do Serenata está fazendo)

Você pode ler mais sobre ele [aqui](https://github.com/Minhacps/votasp-backend/tree/master/bot-twitter).
