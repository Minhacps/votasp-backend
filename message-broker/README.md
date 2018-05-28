# Message Broker

O message broker é responsável por trafegar mensagens entre um projeto e outro. Ele deve cuidar da ordem de envio, quantos vão receber ao mesmo tempo, etc.

O message broker terá 3 filas diferentes (inicialmente) de mensagens. (Sinta-se a vontade para melhorar os nomes):
  - to process
  - processed
  - checked

##### Se possível, poderiamos limitar a quantidade de canais por computador, para dificultar workers mal intencionados.

# To Process
Essa fila receberá mensagens da `process api` toda a vez que alguém terminou de responder as questões e quer fazer o match das informações.

Ao receber mensagem nessa fila, devemos enviar para uma quantidade X de maquinas distintas. A idéia disso é que possamos verificar se essas informações foram processadas depois, no `checker worker`.

Essa fila contem apenas as respostas e o id do usuário. (Estamos pensando em uma forma de randomizar as mensagens para que não seja possível analisar essas respostas).

# Processed
Essa fila recebe mensagens dos `Public Workers` e envia para o `Checker Worker`.

Esta fila vai conter os resultados do processamento, junto com o id do usuário e um checksum das respostas dos candidatos.

# Checked
Essa fila recebe mensagens do `Checker Worker` e envia para a `Process API`.

Essa fila vai conter o resultado final do match, com a pontuação de cada candidato referente ao eleitor.

Se você tem uma idéia ou alteração sobre essa estrutura, converse com a gente no discord ou abra uma issue.
