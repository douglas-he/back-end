# Boas vindas ao repositório do projeto DataFlights

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

## O que deverá ser desenvolvido

Hoje você fará um projeto com o codinome _dataflights_. Nesse projeto, você praticará todos os conceitos de **MongoDB** já ensinados até aqui. Porém, você vai usar um banco de dados diferente dos utilizados nos exemplos e exercícios vistos até agora. Chamaremos esse banco de  `dataFlights`. As instruções de como restaurar o banco podem ser lidas a seguir.

---

## Instruções para restaurar o banco de dados `dataFlights`

1. Faça o download do arquivo de backup [aqui](flights.tar.gz). Clique com botão direito e selecione "Salvar como" para salvar o arquivo em seu computador.

2. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como ***Connection refused***, tente reiniciar sua instância ([veja como fazer isso aqui](https://course.betrybe.com/back-end/mongodb/introduction/#conectando)).

3. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

4. Descompacte o arquivo `flights.tar.gz` na raiz do diretório do projeto:
    ```bash
    tar -xvf flights.tar.gz
    ```

5. No terminal, digite o comando a seguir, lembrando de alterar o caminho do arquivo para o local correto em sua máquina:
    ```bash
    mongoimport --db dataFlights --collection voos <caminho_do_arquivo_flights.json>
    ```

    Esse comando criará um banco de dados chamado `dataFlights` e importará os dados para a coleção `voos`. Esse será seu local de trabalho para o projeto.

---

## Como desenvolver e entregar este projeto

A seguir, tem-se uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu arquivo próprio.

1. Leia a pergunta e crie um arquivo chamado `desafioN.js`, em que N é o número do desafio.

2. O arquivo deve conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries e também de **colocar a instância no contexto correto**, como no exemplo a seguir:
    ```js
    use dataFlights;
    db.voos.find();
    ```

3. Faça isso até finalizar todos os desafios. Em seguida, siga as instruções de como entregar o projeto em [**Instruções para entregar seu projeto**](#instruções-para-entregar-seu-projeto).

---

## Desafios

Monte queries para encontrar as informações dos desafios a seguir.

#### Desafio 1

Retorne todos os bancos de dados da instância.

#### Desafio 2

Troque para o contexto do banco de dados `dataFlights` e exiba todas as coleções desse banco de dados.

#### Desafio 3

Retorne a quantidade de documentos inseridos na coleção `voos`.

#### Desafio 4

Retorne os 10 primeiros documentos com voos da empresa `AZUL`.

#### Desafio 5

Retorne a quantidade de voos da empresa `AZUL`.

#### Desafio 6

Retorne a quantidade de voos da empresa `GOL`.

#### Desafio 7

Retorne o `vooId` do décimo ao décimo segundo documento da coleção `voos`.

#### Desafio 8

Retorne apenas os campos `empresa.sigla`, `empresa.nome` e `passageiros` do voo com o campo `vooId` igual a `756807`.

#### Desafio 9

Retorne a quantidade de voos em que o ano seja menor do que `2017`.

#### Desafio 10

Retorne a quantidade de voos em que o ano seja maior do que `2016`.

#### Desafio 11

Retorne a quantidade de voos entre os anos de `2017` e `2018`.

#### Desafio 12

Retorne apenas os **10** primeiros documentos com voos da empresa `GOL` do ano de `2017`. Exiba apenas os campos `vooId`, `empresa.nome`, `aeroportoOrigem.nome`, `aerportoDestino.nome`, `mes` e `ano`.

#### Desafio 13

Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` não seja igual a `ESTADOS UNIDOS`.

#### Desafio 14

Utilizando os operadores lógicos, conte os documentos em que o campo `aeroportoDestino.pais` seja igual a `BRASIL`, `ARGENTINA` ou `CHILE`.

#### Desafio 15

Utilizando os operadores lógicos, conte os documentos em que o campos `aeroportoDestino.continente` não seja igual a `EUROPA`, `ÁSIA` e `OCEANIA`.

#### Desafio 16

Retorne o total de voos em que o país de origem não seja `BRASIL`.

#### Desafio 17

Retorne o total de voos com mais de 20 `decolagens`.

#### Desafio 18

Retorne o total de voos em que o campo `natureza` possui o valor `Internacional`.

#### Desafio 19

Retorne o total de voos em que o campo `natureza` possui o valor `Doméstica`.

#### Desafio 20

Retorne o `vooId`, `mes` e `ano` do primeiro voo com mais `7000` passageiros pagos.

#### Desafio 21

Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` exista.

#### Desafio 22

Retorne o `vooId` do primeiro voo em que o campo `rtk` não exista.

#### Desafio 23

Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` seja maior ou igual a `1000`.

#### Desafio 24

Retorne o `vooId` do primeiro voo em que a empresa seja `DELTA AIRLINES` ou `AMERICAN AIRLINES`, a sigla do aeroporto de origem seja `SBGR` e a sigla do aeroporto de destino seja `KJFK`.

#### Desafio 25

Retorne o `vooId` e `litrosCombustivel` do primeiro voo em que o campo `litrosCombustivel` **não seja maior do que** `1000` e o campo `litrosCombustivel` exista.

#### Desafio 26

Retorne o primeiro voo em que `litrosCombustivel` **não seja maior do que** `600` **e** a empresa **não seja** `GOL` **ou** `AZUL`, **e** o campo `litrosCombustivel` exista.

#### Desafio 27

Remova todos os voos da empresa `AZUL` em que a quantidade de combustível seja menor do que `400`. Informe a quantidade de documentos removidos.

#### Desafio 28

Remova todos os voos da empresa `GOL` em que a quantidade de passageiros pagos esteja entre `5` e `10`, incluindo os casos em que a quantidade é `5` e `10`. Informe a quantidade de documentos removidos.

#### Desafio 29

Conte quantos voos da empresa `GOL` cujo campo `natureza` possua valor igual a `Doméstica` e insira na coleção `resumoVoos` um documento com os campos: `empresa` (nome da empresa) e `totalVoosDomesticos` (o total retornado anteriormente).

#### Desafio 30

Conte quantos voos da empresa `AZUL` com `natureza Doméstica` existem e insira na coleção `resumoVoos` um documento com os campos: `empresa` (nome da empresa) e `totalVoosDomesticos` (o total retornado anteriormente).

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-02-block25-mongodb-dataflights.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-02-block25-mongodb-dataflights`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b leandro-domingues-mongodb-dataflights`

3. Para cada exercício você deve criar um novo arquivo JS seguindo a seguinte estrutura:
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
        * `git commit -m 'iniciando o projeto MongoDB dataflights'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin seunome-mongodb-dataflights`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-02-block25-mongodb-dataflights.git/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-02-block25-mongodb-dataflights.git/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

### Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório. Este Pull Request deverá conter os arquivos `.js` dos desafios 1 ao 30.

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
