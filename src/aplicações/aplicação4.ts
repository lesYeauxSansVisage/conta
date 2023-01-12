import { Cliente } from "../Cliente";
import { ContaCorrente } from "../constuctors/ContaCorrente";
import { ContaPoupanca } from "../constuctors/ContaPoupança";
import { Endereco } from "../constuctors/Endereco";

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

const cliente1 = new Cliente(
  "12345678901",
  "João",
  "988887744",
  new ContaCorrente(),
  endereco1
);

const cliente2 = new Cliente(
  "12345678901",
  "William",
  "988887744",
  new ContaPoupanca(),
  endereco2
);

cliente1.contas[0].depositar(1000);

cliente2.contas[0].depositar(1000);

console.log(
  `O saldo de ${cliente1.nome} é ${cliente1.contas[0].calcularSaldo()}.`
);

console.log(
  `O saldo de ${cliente2.nome} é ${cliente2.contas[0].calcularSaldo()}.`
);

(cliente1.contas[0] as ContaCorrente).transferir(cliente2.contas[0], 500);

console.log(
  `O saldo de ${cliente1.nome} é ${cliente1.contas[0].calcularSaldo()}.`
);

console.log(
  `O saldo de ${cliente2.nome} é ${cliente2.contas[0].calcularSaldo()}.`
);
