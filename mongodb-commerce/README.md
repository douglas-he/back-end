# Bem vindo ao repositório do projeto MongoDB Commerce

Nesse projeto é praticado conceitos de **MongoDB**.

Para visualizar o resultado das _querys_ você deve possuir o `mongodb` instalado e configurado, e copiar o conteúdo de cada desafio individualmente após realizar os passos para criação do banco abaixo.

---

## Configurando o banco utilizado 

1. Faça o download do arquivo js [aqui](produtos.js). Clique com botão direito e selecione "Salvar como" para salvar o arquivo em seu computador.

2. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

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