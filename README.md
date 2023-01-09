# Solução do Desafio 3 - IUUL

## Aplicação 1

Na aplicação 1, é proposto criar dois funcionários: Um Gerente e um Atendente.

<img src="https://i.ibb.co/z7vY789/aplica-o1solu-o.png" alt="Exemplo da solução da aplicação 1" border="0">

A classe Funcionário herda os atributos da classe Pessoa e possui uma relação de no mínimo um e no máximo vários cargos, além de um um atributo próprio chamado salário. Assim, pra criar um funcionário corretamente é necessário um CPF, um nome, um telefone, indicar o valor do salário e o nome do cargo que ele exerce. Um funcionário pode ter mais que um cargo, portanto é necessário ter uma array que recebe os cargos daquela pessoas, que consiste em um atributo que recebe somente Cargos.

## Aplicação 2

Na segunda aplicação, devemos criar um cliente e adicionar 3 endereços a ele.
Um cliente pode ter no mínimo um e no máximo vários endereços, ou seja, dentro da classe Cliente, devemos ter uma array que recebe somente Endereços, e, já que um cliente possui no mínimo um endereço, dentro do constructor devemos receber um endereço e adicioná-lo a essa array.
Além disso, como a classe Endereço possui uma associação bidirecional com a classe cliente, devemos ter um atributo dentro dessa classe indicando um elemento do tipo Cliente, que será definido quando criarmos um objeto Endereço.
<img src="https://i.ibb.co/k53JFLg/aplica-o2solu-o.png" alt="Exemplo da solução da aplicação 2" border="0">
Após criarmos os 3 endereços e adicioná-los ao cliente criado, usamos o método listarEndereços() que printa no console todos os endereços daquele cliente.

## Aplicação 3

Na aplicação 3, criaremos um cliente que possui uma conta corrente, faremos 3 depósitos de 100 reais e depois sacaremos 50. Por fim, calculamos o saldo, subtraindo os depósitos(Créditos) dos saques(Débitos).

<img src="https://i.ibb.co/tMxZLY3/aplica-o3solu-o.png" alt="Exemplo da solução da aplicação 3" border="0">

## Aplicação 4

Na aplicação 4, é necessário criar dois clientes, um com uma conta corrente e outro com uma conta poupança, então devemos transferir 500 reais do primeiro para o segundo.

<img src="https://i.ibb.co/86VDCtL/aplica-o4solu-o.png" alt="Exemplo da solução da aplicação 4" border="0">

## Aplicação 5

Na última aplicação, devemos criar um cliente com uma Conta Poupança, definir sua rentabilidade mensal em 1%, depositar 200 reais durante um período de um ano e efetuar saques no mês de Março e no mês de Junho, entregando por último o rendimento mensal desse cliente e o saldo final.

<img src='https://i.postimg.cc/W1Y5FnMX/aplica-o5solu-o.png' border='0' alt='Exemplo da solução da aplicação 5'/>
