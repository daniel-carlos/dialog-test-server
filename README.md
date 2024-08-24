## Description

Esse repositório é para um teste para a vaga de Frontend JR da empresa Dialog.

## Installation

```bash
$ yarn install
```

## Creating the Database
Crie um arquivo nomeado ```.env``` e nele defina uma variável de ambiente chamada ```DATABASE_URL```.
Depois crie um banco de dados com o mesmo nome do banco definido no arquivo ```.env```


Em seguida execute o comando no terminal
```bash
# gerar as classes do prisma
$ yarn prisma generate

# criar a estrutura do banco de dados
$ yarn prisma migrate deploy
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```