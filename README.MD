<h1>ImdBank</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=spring-boot&message=framework&color=RED&style=for-the-badge&logo=SPRING"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node-14.x-brightgreen"/>
   <img src="https://img.shields.io/badge/yarn-1.22.17-blue"/>
</p>

> Status do Projeto: :warning:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  ImdBank é um sistema para buscar e visualizar informações de filmes diversos com a possibilidade de favoritar os seus preferidos.
</p>

## Funcionalidades

:heavy_check_mark: Buscar Filmes

:heavy_check_mark: Visualizar informações  

:heavy_check_mark: Favoritar os que mais gostar  

:heavy_check_mark: Listagem de busca de filmes, com "ver mais"

## Pré-requisitos

Frontend:

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Yarn](https://yarnpkg.com/)

Backend: 

:warning: [Java](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR)
:warning: [Maven](https://maven.apache.org/download.cgi) apenas caso não utilize nenhum IDE com suporte ao maven

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/Instituto-Atlantico/frontend-react-challenge_lucas_martins.git
```

Entre na pasta Backend, no terminal rode:

```
mvn spring-boot:run 
```

:warning: Caso use uma IDE como Intellij, abra a parta como projeto e dê um Run na aplicação.

Agora passando para o frontend, abra a pasta pelo terminal, com o yarn e o node instalado, execute:

```
Yarn
```
O Yarn vai baixar todas as dependencies que o react precisa para o nosso frontend.

Após ter finalizado, execute:

```
Yarn start
```

Se tudo tiver dado certo, o projeto está rodando tanto frontendo quanto backend, 
agora pode buscar filmes filmes a vontade :)

## Linguagens, dependencias e libs utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

## Tarefas em aberto

:memo: Adicionar Loading entre as requisições 

Copyright :copyright: Ano - ImdBank
