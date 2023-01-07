import { Cliente } from "../Cliente";

const cliente = new Cliente(
  "88888888811",
  "João",
  "988887744",
  "corrente",
  "4044444",
  "Ladeira",
  "15",
  "Próximo a igreja",
  "São Paulo",
  "SP"
);

cliente.correntes[0].depositar(100, 2022, 12, 1);
cliente.correntes[0].depositar(100, 2022, 12, 1);
cliente.correntes[0].depositar(100, 2022, 12, 1);

cliente.correntes[0].sacar(50, 2022, 12, 1);

console.log(`Seu saldo é de: ${cliente.correntes[0].calcularSaldo()}R$`);
