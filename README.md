# VotaSP - Back-end

Esse repositório contém códigos referentes ao back-end do VotaSP. O repositório principal é VotaSP é [esse aqui](https://github.com/minhacps/votasp)

Se pudéssemos resumir a arquitetura em uma única imagem, seria algo do tipo:
![Diagrama representando a arquitetura de microserviços](https://user-images.githubusercontent.com/903193/40364158-f93d35f4-5da7-11e8-8ba8-964a43549505.png)


## Front-end (amarelo)
O código do front-end pode ser encontrado [aqui](https://github.com/votasp-app)

## API's (verde e rosa)
Cada uma de nossas API's tem responsábilidades definidas e por si só são bem simples.

A idéia de termos feito dessa maneira é possibilitar que qualquer outra comunidade possa ajudar na linguagem que domina.

Já o `API Gateway` é responsável por transformar multiplas APIs em uma única. Ele existe para simplificar o desenvolvimento do Front-end.
