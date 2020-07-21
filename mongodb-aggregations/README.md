# Bem vindo ao repositório do projeto Aggregations

O projeto é composto de váriase operações de agregação de dados no **MongoDB**.

Para visualizar o resultado das _querys_ você deve possuir o `mongodb` instalado e configurado, e copiar o conteúdo de cada desafio individualmente após realizar os passos para criação do banco abaixo.

---

## Configurando o banco utilizado 

1. Faça o download dos aquivos de backup [imdb](./imdb.tar.gz), [airlines](./airlines.tar.gz) e [citibike](./citibike.tar.gz). Clique com botão direito e selecione "Salvar como" para salvar os arquivos em seu computador.

2. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

3. Agora que você tem certeza de que a instância está no ar e que você está conectado a ela, digite `exit` para sair do **MongoDB Shell**. Você voltará ao terminal para restaurar os backups.

4. Extraia os arquivos baixados:
    ```bash
    tar -xvf imdb.tar.gz
    tar -xvf airlines.tar.gz
    tar -xvf citibike.tar.gz
    ```

5. Agora, passando o caminho local de cada arquivo extraído, execute os comandos de _restore_ abaixo:
    ```bash
    mongorestore --db aggregations <caminho_do_arquivo_movies.bson>
    mongorestore --db aggregations <caminho_do_arquivo_air_airlines.bson>
    mongorestore --db aggregations <caminho_do_arquivo_air_alliances.bson>
    mongorestore --db aggregations <caminho_do_arquivo_air_routes.bson>
    mongorestore --db aggregations <caminho_do_arquivo_trips.bson>

    ```

6. Esses comandos criarão um banco de dados chamado `aggregations` com cinco coleções dentro dele. Para confirmar, execute o comando abaixo:
    ```javascript
    use aggregations
    show collections
    ```

---
