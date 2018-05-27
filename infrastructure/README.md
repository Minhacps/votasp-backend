# VotaSP - Infraestrutura

Tentamos ter uma arquitetura que atendesse ao máximo os seguintes requisitos:
   - fácil de migrar (se precisarmos)
   - simples de entender
   - dinâmica (pode ser mudada facilmente e fácil de escalar)

## Docker
Usamos docker para tudo aqui. Até mesmo para rodar o rancher (mais sobre ele abaixo).
A idéia do docker é simplificar o desenvolvimento e o deploy de uma aplicação para que ela sempre se comporte da mesma maneira, independente do host.

## Rancher
Usamos o rancher para gerenciar visualmente as estruturas entre os containers.
Você pode acessa-lo [aqui](https://rancher.votasp.org.br), mas ele está disponível apenas a integrantes do time VotaSP, por questões de segurança dos dados.

Todas nossas aplicações fazem o deploy de forma automática para ele por meio de um `docker-compose.yml`.

Planejamos, futuramente, migrar para o Rancher 2.0, que roda em cima do kubernetes.

### Maquinas
As maquinas atualmente são VMs no Google Cloud com um container docker `rancher/client`.

Para adicionar uma maquina na nossa infra, é só rodar o `rancher/client` com os parametros que o rancher te mostrar.

(Ela precisa conseguir acessar o nosso server NFS também).

## CircleCI (Continuous Integration)
Essa ferramenta é responsável por rodar testes automatizados, fazer deploys e previnir que código ruim chegue em produção.

Ele é configurado na pasta `.circleci` de cada repositório.


## NFS
Usamos um server NFS internamente para compartilhar os volumes docker entre as maquinas. Com isso, nos tornamos menos dependentes das maquinas.

O NFS pode ser um problema para os bancos de dados, se isso se tornar realidade, podemos remove-lo ou procurar uma solução mais escalável.

# Conclusão
Caso você tenha idéias de como melhorar essa arquitetura, abra uma issue ou converse com a gente no nosso discord. Estamos abertos a mudanças.
