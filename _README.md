## Sobre o desafio

Este é um simples teste para o qual você desenvolverá uma aplicação de acordo com os requisitos e orientações neste documento.

Você pode utilizar qualquer boilerplate (CRA, nwb, etc) que você preferir, mas tente realizar de forma simples. É um plus caso você queira efetuar o seu próprio boilerplate para buildar suas aplicações (webpack, rollup, etc). Você também é livre para utilizar as ferramentas que desejar.

## Como funciona?

1.  Crie seu branch para desenvolver a solução
2.  Resolva o desafio da melhor forma que conseguir
3.  Realize commits como se estivesse em um projeto colaborativo, pois isso fará parte do processo de avaliação
4.  Quando terminar abra um Pull Request para o branch `master` deste repositório, dessa forma saberemos que você concluiu o desafio e podemos iniciar a revisão do código
5.  Entraremos em contato com você para dar um feedback

## A solução a ser desenvolvida

### A aplicação web (frontend)

##### Home 

- Página inicial da aplicação que contém um campo de pesquisa
- A aplicação não deve ter nenhum tipo de controle de acesso
- O resultado da pesquisa será uma lista de filmes que devem ser exibidos para o usuário nessa mesma página chamada **Home**
- Exibir na listagem de filmes apenas a foto, o título, o ano
- Pense em estado vazio para os filmes, loading, "filme não encontrado" e "lista de resultados muito grande"

##### Favoritos

- Os filmes marcados como "Gostei" devem aparecer em outra página chamada **Favoritos**

##### Página do filme

- Exibe os detalhes do filme selecionado. Além do que já era exibido na tela **Home**, exibir informações como elenco, direção, premiações e língua original, sinopse completa, etc. (fique à vontade se quiser exibir mais informações do que a tela de exemplo)
- Ao voltar para a página **Home**, devemos ter os mesmos dados da pesquisa realizada anteriormente à **"Página do filme"**
- Permite que o usuário marque um filme como "Gostei" para ser exibido na listagem com esse símbolo (essa marcação é exclusiva para o usuário que marcou, só ele verá isso, e serve apenas para exibir o que ele tem como favorito. Mas foque em soluções simples e funcionais)
- Pense sobre loading e "detalhes não encontrados"
  
### API (backend)
Você poderá desenvolver uma API que será consultada pela aplicação web para receber os dados necessários para as telas

A construção dessa API deve usar a linguagem Java e desenvolver quantos endpoints achar necessário.

Esse serviço deve se comunicar com a API [OMDb API](http://www.omdbapi.com/) ou [TMDB API](https://developers.themoviedb.org/4/getting-started/authorization) para fornecer os dados para o frontend, você também pode optar por utilizar a API de filmes que preferir.

## Avaliação

A proposta deste desafio é avaliar seus conhecimentos de HTML, CSS, Java, boas práticas de programação, uso do GIT, conhecimento da linguagem e lib/framework utilizados, entre outras skills que serão demonstradas ao decorrer do projeto.

### Dicas

* Escreva um bom README com informações que auxiliem quem for ler o código (ex: funcionamento, como startar o projeto e como buildar)
* Seria ótimo poder executar a solução do desafio com apenas **um** comando (ou com o menor trabalho possível)  =)
* Sinta-se a vontade para definir o layout das páginas web
* Fazer perguntas é bom. Não vamos te penalizar por perguntar
* A API externa às vezes pode demorar em nos responder, pense em loading e estado vazio da sua aplicação
* Estamos procurando por sinais do seu entendimento de alguns conceitos como eventos, promises, ciclos de vida e como você aplica e implementa isto com a linguagem utilizada
* Testes unitários serão bem valorizados
* Uso do git será bem valorizado
* Seu código será avaliado por: semântica, estrutura, legibilidade, tamanho, elegância (entre outros fatores)
* Não existe a necessidade de fazer deploy CI/CD da aplicação. Mas se feito, será um bônus
* E por fim, lembre-se que, muitas vezes, "menos é mais" :)

#### Telas:

Não temos o layout das telas definido, fique à vontade para usar a sua criatividade.
Uma ideia seria algo assim: [Marvel Prototype](https://marvelapp.com/3cj0i64/screen/52947277)
