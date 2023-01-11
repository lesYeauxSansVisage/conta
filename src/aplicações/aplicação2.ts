import { Cliente } from "../Cliente";
import { ContaCorrente } from "../constuctors/ContaCorrente";
import { ContaPoupanca } from "../constuctors/ContaPoupança";
import { Endereco } from "../constuctors/Endereco";

// A aplicação 2 consiste em adicionar 3 endereços a um cliente e printar os endereços

const endereco1 = new Endereco(
  "6198400",
  "Vila",
  "15",
  "Próximo da igreja",
  "Salvador",
  "BA"
);

const endereco2 = new Endereco(
  "6198555",
  "Ladeira",
  "10",
  "Próximo da praça",
  "São Paulo",
  "SP"
);

const endereco3 = new Endereco(
  "87645000",
  "Estrada",
  "1",
  "Próximo da escola",
  "Fortaleza",
  "CE"
);

const cliente = new Cliente(
  "55555555511",
  "João",
  "988888888",
  new ContaPoupanca(),
  endereco1
);

cliente.adicionarConta(new ContaCorrente());
cliente.adicionarConta(new ContaCorrente());
cliente.adicionarConta(new ContaCorrente());

console.log(cliente);
