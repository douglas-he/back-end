# Boas vindas ao repositório do projeto DataFlights

Nesse projeto é praticado conceitos de **MongoDB**.

Para visualizar o resultado das _querys_ você deve possuir o `mongodb` instalado e configurado, e copiar o conteúdo de cada desafio individualmente após realizar os passos para criação do banco abaixo.

---

## Configurando o banco utilizado 

1. Faça o download do arquivo de backup [aqui](flights.tar.gz). Clique com botão direito e selecione "Salvar como" para salvar o arquivo em seu computador.

2. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

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