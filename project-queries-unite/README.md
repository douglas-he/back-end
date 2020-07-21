# Boas vindas ao repositório do projeto Queries Unite!

O projeto é uma pratica de conceitos de `SQL`.

As _querys_ foram construídas com base no `MySql WorkBench`, onde podem ser executadas após a inserção dos banco do arquivo `desafio1.sql`.

---

### Problema resolvido

Imagine que a gerência de sua empresa de desenvolvimento de software solicitou para você que um banco de dados seja projetado para a seguinte situação:

"Precisamos montar a estrutura do banco de dados que será usado no sistema de agendamento de viagens. A estrutura esperada para este módulo do sistema deve ser capaz de armazenar informações importantes sobre as pessoas que usam a aplicação, como: nome, idade e profissão. Devemos ter uma maneira de armazenar informações sobre as possíveis viagens que uma pessoa pode fazer, tais como: nome do pacote, destino (que deve conter no mínimo informações sobre a cidade e país de destino), data prevista de ida, data prevista de volta e custo total da viagem."

* Uma pessoa pode comprar mais de um pacote de viagens, mas **não** pode comprar o mesmo pacote duas ou mais vezes;

* Um pacote de viagens pode possuir mais de um destino;

* Um pacote de viagens deve possuir o campo `purchase_count` (contagem de compras), com o valor padrão de 0;

* Toda coluna que representa o identificador único dos registros de uma tabela deve ter seu valor gerado automaticamente de forma incremental, com exceção de tabelas que sejam agregações de outras tabelas (como é o caso da tabela `film_category` do banco `sakila`, por exemplo).

---

### Dados

Tendo em mente a descrição acima, a estrutura do banco de dados criado deve ser capaz de armazenar todas as informações abaixo:

* Rafael Martins, 33, Arquiteto, contratou o pacote "Promoção 3 destinos" no valor de R$12.500,99 e tem uma viagem programada para o dia 25/09/2022, com a volta prevista para o dia 12/10/2022. A viagem deve passar pelos seguintes destinos:
    - Cape Town, África do Sul;

    - Bali, Indonésia;

    - Marrakesh, Marrocos.

* Amanda Rocha, 25, Desenvolvedora de Software, contratou o pacote "Vem Pro Verão" no valor de R$9.650,99 e tem uma viagem programa para o dia 16/10/2022, com a volta prevista para o dia 26/10/2022. A viagem deve passar por dois destinos diferentes:
    - Paris, França;

    - Nova Iorque, Estados Unidos.

* Jonas Cabral, 18, Pintor, contratou o pacote "Cultura Francesa" no valor de R$3.900,99 e tem uma viagem programada para o dia 12/07/2022, com a volta prevista para o dia 20/07/2022. A viagem tem o destino único de:
    - Paris, França.

* Carol Domingues, 37, Contadora, contratou o pacote "Vem Pro Verão" no valor de R$7.725,99 e tem uma viagem programada para o dia 19/02/2022, com a volta prevista para o dia 26/03/2022. A viagem possui os seguintes destinos:
    - Cape Town, África do Sul;

    - Bali, Indonésia.

* Sabrina Ferreira, 45, Engenheira de Alimentos, contratou o pacote "Cultura Francesa" no valor de R$3.900,99 e tem uma viagem programada para o dia 12/07/2022, com a volta prevista para o dia 20/07/2022. A viagem tem o destino único de:
    - Paris, França.

* Sabrina Ferreira, 45, Engenheira de Alimentos, também contratou o pacote "Promoção 3 destinos" com o valor de R$13.500,99 e tem uma viagem programa para o dia 13/09/2022, com a volta prevista para o dia 18/10/2022. A viagem possui os seguintes destinos:
    - Marrakesh, Marrocos;

    - Nova Iorque, Estados Unidos;

    - Paris, França.

Mais adiante neste projeto, você será solicitado a popular o banco de dados que criar, com os dados acima.
