# Projeto TryBirita
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Projeto full stack feito em grupo durante o curso da Trybe onde treinamos todas as soft e hard skills aprendidas até o momento.

O projeto consiste de uma aplicação de cadastro de pedidos de bebidas, tendo 3 perfis de usuário e suas respectivas telas:

- Administrador
  - Gerenciamento de usuários (CRUD)
- Vendedor
  - Listagem de pedidos
  - Detalhes e acompanhamento de um pedido
- Cliente
  - Listagem de produtos
  - Checkout de novo pedido
  - Listagem de pedidos
  - Detalhes e acompanhamento de um pedido

## Demonstração
![Demonstração da aplicação TryBirita](docs/trybirita-demo.gif)

## Habilidades

- Trello para organização das tarefas estilo kanban
- Utilização de metodologias ágeis, como Planning e DMs para divisão de tarefas e checagem do progresso da equipe
- Backend desenvolvido utilizando a arquitetura MSC, Node e Express
- Frontend desenvolvido utilizando React, Context API e Chakra UI

## Requisitos do projeto

### Obrigatórios

- [x] 1 - Crie uma tela de login que deve ser acessível pelos endpoints / e /login no navegador

- [x] 2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo

- [x] 3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal formatados

- [x] 4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados inexistentes no banco de dados

- [x] 5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados

- [x] 6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login

- [x] 7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo

- [x] 8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal formatados

- [x] 9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos

- [x] 10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente

- [x] 11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar -, que servirá também para demais telas das pessoas usuárias

- [x] 12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo

- [x] 13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage

- [x] 14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos

- [x] 15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios

- [x] 16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados

- [x] 17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo

- [x] 18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total

- [x] 19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho

- [x] 20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido após a finalização do mesmo

- [x] 21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em salesProducts, ao finalizar o pedido

- [x] 22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo

- [x] 23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos

- [x] 24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

- [x] 25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo

- [x] 26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda

- [x] 27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

- [x] 28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos

- [x] 29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

- [x] 30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

- [x] 31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda

- [x] 32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido

- [x] 33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas

- [x] 34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas

- [x] 35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas

- [x] 36 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo

- [x] 37 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro

- [x] 38 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas

- [x] 39 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes

- [x] 40 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas

- [x] 41 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela

- [x] 42 - Crie testes que cubram no mínimo 30 por cento dos arquivos do front-end e back-end em src com um mínimo de 75 linhas cobertas em cada

- [x] 43 - (`Bônus`) Crie testes que cubram no mínimo 60 por cento dos arquivos do front-end e back-end em src com um mínimo de 150 linhas cobertas em cada

- [x] 44 - (`Bônus`) Crie testes que cubram no mínimo 90 por cento dos arquivos do front-end e back-end em src com um mínimo de 225 linhas cobertas em cada

## Rodando o projeto localmente com Docker Compose

1. Clone o repositório

2. Inicie a aplicação
```sh
docker compose up -d
```

3. Abra a aplicação em http://localhost:3000
  - As portas expostas da aplicação são:
    - 3000: Frontend
    - 3001: Backend
    - 3002: MySQL DB

4. Para parar a aplicação
```sh
docker compose down
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/natferlima"><img src="https://avatars.githubusercontent.com/u/83908611?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Natália Ferreira Lima</b></sub></a><br /><a href="https://github.com/jonathan-f-silva/project-trybirita/commits?author=natferlima" title="Code">💻</a></td>
    <td align="center"><a href="https://br.linkedin.com/in/kristiano-kasper"><img src="https://avatars.githubusercontent.com/u/85760820?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristiano Kasper</b></sub></a><br /><a href="https://github.com/jonathan-f-silva/project-trybirita/commits?author=khkasper" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/henrique-junqueira-braga/"><img src="https://avatars.githubusercontent.com/u/84282335?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Henrique Braga</b></sub></a><br /><a href="https://github.com/jonathan-f-silva/project-trybirita/commits?author=henriquejbraga" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/benedettigabriel"><img src="https://avatars.githubusercontent.com/u/85767905?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Elias Benedetti</b></sub></a><br /><a href="https://github.com/jonathan-f-silva/project-trybirita/commits?author=benedetti14" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/jonathan-f-silva/"><img src="https://avatars.githubusercontent.com/u/85591570?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Ferreira</b></sub></a><br /><a href="https://github.com/jonathan-f-silva/project-trybirita/commits?author=jonathan-f-silva" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
