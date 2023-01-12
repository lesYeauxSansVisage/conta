import { Cliente } from "../Cliente";
import { ContaCorrente } from "../constuctors/ContaCorrente";
import { Endereco } from "../constuctors/Endereco";

const endereco = new Endereco(
  "6198555",
  "Ladeira",
  "10",
  "Próximo da praça",
  "São Paulo",
  "SP"
);

const cliente = new Cliente(
  "88888888811",
  "João",
  "988887744",
  new ContaCorrente(),
  endereco
);

cliente.contas[0].depositar(100);
cliente.contas[0].depositar(100);
cliente.contas[0].depositar(100);

cliente.contas[0].sacar(50);

console.log(`Seu saldo é de: ${cliente.contas[0].calcularSaldo()}R$`);
