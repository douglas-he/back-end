# Bem vindo ao repositório do projeto MongoDB Commerce

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

## O que deverá ser desenvolvido

Hoje você fará um projeto com o codinome _commerce_. Nesse projeto, você praticará todos os conceitos de **MongoDB** já ensinados até aqui.

Para esse projeto, escolhemos um dataset bem menor do que o **dataFlights**, mas isso não vai impedir que você aplique tudo o que viu até aqui, combinando os conhecimentos deste bloco e do anterior.

A ideia é trabalhar com alguns dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas.

Então vamos lá aplicar seu conhecimento nesse banco de dados "saboroso"! 😉

---

## Instruções para restaurar o banco de dados `commerce`

1. Faça o download do arquivo js [aqui](produtos.js). Clique com botão direito e selecione "Salvar como" para salvar o arquivo em seu computador.

2. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como ***Connection refused***, tente reiniciar sua instância ([Veja como fazer isso aqui](https://course.betrybe.com/back-end/mongodb/introduction/#conectando)).

3. Agora que você tem certeza de que a instância está no ar e que você está conectado a ela, troque de contexto passando do banco `test` para o banco `commerce`:
    ```javascript
    use commerce;
    ```

4. Confirme o caminho completo do diretório local onde você salvou o arquivo com a função `pwd`:
    ```javascript
    pwd();
    ```

    Esse caminho equivale ao caminho de onde você se conectou à sua instância.

5. Agora, passando o caminho local, execute o arquivo js:
    ```javascript
    load("<caminho_do_arquivo>/produtos.js");
    ```

6. Esse script criará 5 documentos na coleção `produtos`. Se tudo correr bem, seu retorno será um simples `true`. Depois de restaurado o banco, confira a quantidade de documentos nessa coleção:
    ```javascript
    db.produtos.count();
    ```

---

## Como desenvolver e entregar este projeto

Temos, a seguir, uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu arquivo próprio.

1. Leia a pergunta e crie um arquivo chamado `desafioN.js`, em que N é o número do desafio.

2. O arquivo deve conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries e também de **colocar a instância no contexto correto**, como no exemplo a seguir:
    ```js
    use commerce;
    db.produtos.find();
    ```

3. Faça isso até finalizar todos os desafios. Em seguida, siga as instruções de como entregar o projeto em [**Instruções para entregar seu projeto**](#instruções-para-entregar-seu-projeto).

---

## Desafios

Monte queries para encontrar as informações dos desafios a seguir.

##### Desafio 1

Inclua o campo `criadoPor` em todos os documentos, colocando seu nome no valor desse campo.

##### Desafio 2

Inclua o campo `valorUnitario` em todos os documentos em que esse campo não existe e atribua a ele o valor `0.00`, com o tipo `NumberDecimal`.

##### Desafio 3

Inclua o campo `avaliacao` do tipo `NumberInt` e com o valor `0` em todos os documentos da coleção.

##### Desafio 4

Incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. Dica: utilize como filtro o campo `tags`.

##### Desafio 5

Incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

##### Desafio 6

Atribua o valor `16.90` ao campo `valorUnitario` e a data corrente ao campo `ultimaModificacao` no sanduíche `Big Mac`.

##### Desafio 7

Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

##### Desafio 8

Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

##### Desafio 9

Remova o item `cebola` de todos os sanduíches.

##### Desafio 10

Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`.

##### Desafio 11

Remova o último `ingrediente` do sanduíche `Cheddar McMelt`.

##### Desafio 12

Agora, vamos simular a quantidade de vendas dos sanduíches por dia da semana.

Para isso, inclua um _array_ com sete posições em todos os sanduíches. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O _array_ deve se parecer como abaixo:

```json
"vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
```

O primeiro item desse _array_ representa as vendas no Domingo, enquanto o último representa as vendas no Sábado. Tenha isso claro porque vamos utilizar essa sequência mais à frente.

##### Desafio 13

Incremente as vendas de `Big Mac` às quartas-feiras em `60`.

##### Desafio 14

Incremente as vendas de todos os sanduíches de carne do tipo `bovino` e `pão` aos sábados em `120`.

##### Desafio 15

Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.

##### Desafio 16

Ordene os elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente. Dica: mesmo sem adicionar nenhum novo elemento, para essa operação é necessário utilizar também o modificador `$each`.

##### Desafio 17

Adicione o elemento `muito sódio` ao _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

##### Desafio 18

Adicione o elemento `contém sódio` ao _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

##### Desafio 19

Conte quantos produtos contêm `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.

##### Desafio 20

Conte quantos produtos têm `4` ingredientes.

##### Desafio 21

Crie um índice do tipo `text` no campo `descricao` com o idioma padrão `portuguese`.

##### Desafio 22

Conte quantos documentos contêm as palavras `frango` e `hamburguer` utilizando o operador `$text`.

##### Desafio 23

Conte quantos documentos contêm a expressão `feito com` utilizando o operador `$text`.

##### Desafio 24

Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.

##### Desafio 25

Remova o campo `valorUnitario` do item `Big Mac`.

##### Desafio 26

Retorne o nome dos sanduíches em que o número de `curtidas` é maior que o número de vendas.

##### Desafio 27

Retorne o nome e a quantidade de vendas dos sanduíches em que o número de vendas é múltiplo de `5`.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-02-mongodb-commerce.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-02-mongodb-commerce`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b seunome-mongodb-commerce`

3. Para cada exercício você deve criar um novo arquivo js seguindo a seguinte estrutura:
  * desafio1.js, desafio2.js, ..., desafioN.js

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.js)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando solução para desafio 1)
        * `git status` (deve aparecer listado o arquivo _desafio1.js_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto MongoDB Commerce'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin seunome-mongodb-commerce`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-02-mongodb-commerce/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-02-mongodb-commerce/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

### Entregáveis

Para entregar o seu projeto, você deverá criar um Pull Request neste repositório. Este Pull Request deverá conter os arquivos js dos desafios 1 ao 27.

Qualquer dúvida, procure a monitoria. Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub sempre que quiser!

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-02`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros estudantes forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
