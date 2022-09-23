## 💻 Projeto

O projeto MePoupe! é um teste utilizando como base uma API Rest.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)
- [Winston](https://github.com/winstonjs/winston)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Victornfb/me-poupe.git
$ cd me-poupe
```

Instale as dependências

```bash
$ npm install
```

Com o docker instalado, execute:

```bash
$ docker compose up
```

A API estará disponível no seu navegador pelo endereço http://localhost:3333.

A documentação estará disponível pelo endereço http://localhost:3333/api-docs/.

E para consultar o log em tempo real, execute:

```bash
$ docker logs -f me-poupe
```

Ao fazer uma requisição para a API, será retornado um log com a seguinte estrutura:

```bash
# Data e hora | HTTP Código | URL: http://localhost:3333/example | Res: {"message":"Esse é um exemplo"}
2022-09-21T01:14:18.013Z | GET 200 | URL: /average?firstNumber=2&secondNumber=4.9 | Res: {"average":3}
```

## 📝 Licença

Esse projeto está sob a licença MIT. Para mais detalhes:

<a href="https://opensource.org/licenses/MIT" target="_blank"><img alt="Licença" src="https://img.shields.io/badge/license-MIT-0a66c2?style=flat-square"></a>

Feito por [Victor Nunes](https://victornfb.com.br/)

[![Linkedin Badge](https://img.shields.io/badge/-Victor%20Nunes-0a66c2?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/victornfb/)](https://www.linkedin.com/in/victornfb/)
[![Gmail Badge](https://img.shields.io/badge/-victornfb@outlook.com-ea4435?style=flat-square&logo=Gmail&logoColor=white&link=mailto:victornfb@outlook.com)](mailto:victornfb@outlook.com)
