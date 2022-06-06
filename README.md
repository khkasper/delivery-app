# Projeto TryBirita
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Projeto full stack feito em grupo durante o curso da Trybe aonde treinamos todas as soft e hard skills aprendidas até o momento.

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

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/benedettigabriel"><img src="https://avatars.githubusercontent.com/u/85767905?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Elias Benedetti</b></sub></a><br /><a href="https://github.com/jonathan-f-silva/project-trybirita/commits?author=benedetti14" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!