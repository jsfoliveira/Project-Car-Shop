# 	:woman_technologist: Project Car Shop

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo  do curso de desenvolvimento web da Trybe. <br>
Para este projeto, você deverá aplicar os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados `MongoDB`.

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Esse projeto foi desenvolvido no bloco de back-end e foi possível treinar a linguagem TypeScript, POO, Mongoose.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-project-car-shop', isso por conta da exigência do curso.
### Instalação (sem Docker)
Precisa utilizar o comando $npm install, a fim de instalar as dependências do projeto.<br>
Precisa ter na máquina o mongodb.
### Usando Docker

  > Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it car_shop bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


  ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="images/remote-container.png" width="800px" >
### Banco de dados
 - O arquivo `src/models/connection.ts` possui o código necessário para realizar a conexão com o banco de dados:

  ```typescript
  import mongoose from 'mongoose';

  const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';
  const MONGO_DB_URL = 'mongodb://mongodb:27017/CarShop';

  const connectToDatabase = (
    mongoDatabaseURI = process.env.MONGO_URI
      || MONGO_DB_URL,
  ) => mongoose.connect(mongoDatabaseURI);

  export default connectToDatabase;

  ```

  - O arquivo `src/app.ts` contém o código necessário para subir o servidor:

  ```typescript
  import express from 'express';

  const app = express();

  export default app;
```
### Testes
O teste acontece de cada desafio, através do comando $npm test.
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.

#### :footprints:Requisito 1 - Crie a interface `IModel` genérica

Crie a interface `IModel`, que será usada para a conexão com o banco de dados. Ela deverá ter, pelo menos, as funções `create()`, `read()`, `readOne()`, `update()` e `delete()`.

Por ser genérica, nossa interface deverá receber um tipo `T` qualquer, e ela deve esperar, em cada função, as seguintes especificações:
 - `create()`: deve receber um objeto do tipo `T`e retornar uma Promise do tipo `T`.
 - `read()`: deve retornar uma Promise contendo um array de objetos do tipo `T`.
 - `readOne()`: deve receber uma string e retornar uma Promise do tipo `T` ou nula.
 - `update()`: deve receber uma string e um objeto do tipo `T` e retornar uma Promise do tipo `T` ou nula.
 - `delete()`: deve receber uma string e retornar uma Promise do tipo `T` ou nula.
 - O arquivo deve ficar no diretório `/src/interfaces/` e  ter o nome de `IModel.ts`.
 - A interface deve ser exportada com o nome de `IModel` e não deve ser exportada de forma padrão.

<details>
  <summary>Será verificado se:</summary>

 - Existe a interface `IModel`;
 - A interface `IModel` possui todas as funções solicitadas;
 - A interface `IModel` pode ser implementada com qualquer tipo;
 - A interface está no local correto, com o nome correto e com a forma de exportação correta;

</details>

#### :footprints:Requisito 02 - Crie a interface `IVehicle` genérica

Crie a interface `IVehicle`, que será usada para criarmos nossos tipos de carro, moto e caminhão.
Ela deverá ter todos os atributos comuns de todos os veículos que listaremos aqui. São eles:

 | Atributo | Descrição |
 | :-------: | :-------- |
 | `model`   | Marca e/ou modelo do veículo. Deve ser uma string com, pelo menos, 3 caracteres |
 | `year`    | Ano de fabricação do veículo. Deve ser um valor inteiro positivo maior ou igual a 1900, porém menor ou igual a 2022 |
 | `color`   | Cor principal do veículo. Deve ser uma string com, pelo menos, 3 caracteres |
 | `status`  | Status que define se um veículo pode ou não ser comprado. Deve receber valores booleanos e deve ser opcional |
 | `buyValue` | Valor de compra do veículo. Deve receber apenas números inteiros |

 - O arquivo deve ficar no diretório `/src/interfaces/` e ter o nome de `IVehicle.ts`.
 - A interface deve ser exportada com o nome de `IVehicle` e **não deve** ser exportada de forma padrão.

> ⚠️ Apenas os tipos dos atributos serão avaliados nesse requisito

<details>
  <summary>Será verificado se:</summary>

  - A interface `IVehicle` existe;
  - A interface possui os atributos solicitados;
  - A interface está no local correto, com o nome correto e com a forma de exportação correta.

</details>

#### :footprints:Requisito 03 - Crie a interface `ICar` a partir da interface `IVehicle`

Crie a interface `ICar`, de modo que ela possua todos os atributos da interface `IVehicle` e, também, os atributos:

 | Atributo  | Descrição |
 | :--------: | :-------- |
 | `doorsQty` | Quantidade de portas de um carro. Deve ser um valor inteiro positivo maior ou igual a 2 e menor ou igual a 4 |
 | `seatsQty` | Quantidade de assentos disponíveis no carro. Deve ser maior ou igual a 2 e menor ou igual a 7 |
 
 - O arquivo deve ficar no diretório `/src/interfaces/` e  ter o nome de `ICar.ts`.
 - A interface deve ser exportada com o nome de `ICar` e não deve ser exportada de forma padrão.

> ⚠️ Apenas os tipos dos atributos serão avaliados nesse requisito


<details>
  <summary>Será verificado se:</summary>

  - A interface `ICar` estende a interface `IVehicle`;
  - É possível criar um objeto do tipo `ICar`;
  - A interface `ICar` possui as propriedades `doorsQty` e `seatsQty`;
  - A interface está com local, nome e forma de exportação correta.

</details>


#### :footprints:Requisito 04 - Crie uma rota para o endpoint `/cars` onde seja possível cadastrar um novo carro

Crie uma rota que receba uma requisição `POST` para cadastrar um veículo do tipo carro.

<details>
  <summary>Será verificado se:</summary>

  - A rota retorna erro `400` caso a requisição receba um objeto vazio;
  - A rota retorna erro `400` ao tentar criar um carro com quantidade de assentos inferior a 2;
  - A rota retorna erro `400` ao tentar criar um carro com quantidade de portas inferior a 2;
  - A rota retorna erro `400` ao tentar criar um carro sem `model`, `year`, `color` e `buyValue`;
  - A rota retorna erro `400` ao tentar criar um carro sem `doorsQty` e `seatsQty`;
  - Não é possível criar um carro se os atributos `model`, `year`, `color`, `buyValue`, `doorsQty` e `seatsQty` estiverem com tipos errados;
  - É possível criar um carro se todos os parâmetros forem passados corretamente;
  - Sua API deve responder com status http `201` e o seguinte body:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  ```

</details>

#### :footprints:Requisito 05 - Escreva testes para cobrir 15% da camada de Model

Escreva testes que cubram, pelo menos, 15% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 15%.

</details>

#### :footprints:Requisito 06 - Escreva testes para cobrir 15% da camada de Service

Escreva testes que cubram, pelo menos, 15% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 15%.

</details>

#### :footprints:Requisito 07 - Escreva testes para cobrir 15% da camada de Controller

Escreva testes que cubram, pelo menos, 15% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>
  
  - A cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 15%.

</details>

#### :footprints:Requisito 08 - Crie uma rota para o endpoint `/cars` onde seja possível listar todos os carros registrados

Crie uma rota que receba uma requisição `GET` para receber todos os veículos do tipo carro registrados no banco de dados.

<details>
  <summary>Será verificado se:</summary>

  - É possível listar os carros com sucesso;
  - Haverá retorno de uma lista vazia se não houver carros;
  - Sua API responderá com status http `200` em caso de sucesso.
  
</details>

#### :footprints:Requisito 09 - Crie uma rota para o endpoint `/cars/id` onde seja possível listar um único carro através do seu id

Crie uma rota que receba uma requisição `GET` para receber determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É possível listar um carro com sucesso através do id;
  - Sua API responderá com status http `200` em caso de sucesso;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  
</details>

#### :footprints:Requisito 10 - Escreva testes para cobrir 30% da camada de Model

Escreva testes que cubram, pelo menos, 30% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 30%.
  
</details>

#### :footprints:Requisito 11 - Escreva testes para cobrir 30% da camada de Service

Escreva testes que cubram, pelo menos, 30% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 30%.
  
</details>

#### :footprints:Requisito 12 - Escreva testes para cobrir 30% da camada de Controller

Escreva testes que cubram, pelo menos, 30% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 30%.
  
</details>

#### :footprints:Requisito 13 - Crie uma rota para o endpoint `/cars/id`, onde é possível atualizar o registro de um carro através do seu id

Crie uma rota que receba uma requisição `PUT` para atualizar determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `400` caso o `body` esteja vazio;
  - Um carro é atualizado com sucesso;
  - Sua API responderá com status http `200` e o seguinte body, em caso de sucesso:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  ```
  
</details>

#### :footprints:Requisito 14 - Escreva testes para cobrir 60% da camada de Model

Escreva testes que cubram, pelo menos, 60% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 60%.
  
</details>

#### :footprints:Requisito 15 - Escreva testes para cobrir 60% da camada de Service

Escreva testes que cubram, pelo menos, 60% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 60%.
  
</details>

#### :footprints:Requisito 16 - Escreva testes para cobrir 60% da camada de Controller

Escreva testes que cubram, pelo menos, 60% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 60%.
  
</details>

#### :footprints:Requisito 17 - Crie uma rota para o endpoint `/cars/id` para excluir os registros de um carro

Crie uma rota que receba uma requisição `DELETE` para excluir determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota. 

<details>
  <summary>Será verificado se:</summary>

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - Um carro é removido com sucesso;
  - Sua API deve responder com status http `204` sem body;
  
</details>
