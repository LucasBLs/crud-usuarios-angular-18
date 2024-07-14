# Crud Usuários Angular

![Angular](https://img.shields.io/badge/Angular-18.1.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-10.12.3-yellow?style=for-the-badge&logo=firebase)
![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=mit)

## Descrição

Crud Usuários é uma aplicação desenvolvida em Angular 18.1.0 e TypeScript 5.5.2, utilizando Firebase 10.12.3 para armazenamento de dados. Este projeto foi desenvolvido com base em um curso de Angular, para fins de prática e para ser um exemplo público no GitHub.

## Requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [Angular CLI](https://angular.io/cli)
- [Firebase](https://firebase.google.com/)

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/LucasBLs/crud-usuarios-angular-18.git
    cd crud-usuarios-angular-18
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure as credenciais do Firebase no arquivo `src/environments/environment.ts`:

    ```ts
    export const environment = {
      production: false,
      firebase: {
        apiKey: "your_api_key",
        authDomain: "your_auth_domain",
        projectId: "your_project_id",
        storageBucket: "your_storage_bucket",
        messagingSenderId: "your_messaging_sender_id",
        appId: "your_app_id",
      }
    };
    ```

4. Execute a aplicação:

    ```sh
    ng serve
    ```

    Acesse a aplicação em `http://localhost:4200`.

## Uso

### Tela Inicial

A tela inicial exibe gráficos e informações ilustrativas. Não há autenticação no backend; os dados são fixos.

![Tela Inicial](https://github.com/LucasBLs/crud-usuarios-angular-18/blob/main/images/tela_inicial.png)

### Tela de Cadastro de Usuários

Nesta tela, você pode gerenciar usuários, adicionando, editando ou removendo registros.

![Cadastro de Usuários](https://github.com/LucasBLs/crud-usuarios-angular-18/blob/main/images/cadastro_usuarios.png)

### Tela de Login

Tela de login meramente ilustrativa, sem autenticação real.

![Tela de Login](https://github.com/LucasBLs/crud-usuarios-angular-18/blob/main/images/tela_login.png)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob os termos da licença MIT.
