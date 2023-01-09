import { Cliente } from "../Cliente";

const cliente = new Cliente(
  "12345678901",
  "Jonas",
  "983887744",
  "poupança",
  "50555555",
  "Ladeira",
  "15",
  "Próximo a pracinha",
  "São Paulo",
  "SP"
);

cliente.poupancas[0].rentabilidadeMensal = 1;

cliente.poupancas[0].depositar(200, 2022, 0, 1);

cliente.poupancas[0].depositar(200, 2022, 1, 1);

cliente.poupancas[0].depositar(200, 2022, 2, 1);

cliente.poupancas[0].depositar(200, 2022, 3, 1);

cliente.poupancas[0].depositar(200, 2022, 4, 1);

cliente.poupancas[0].depositar(200, 2022, 5, 1);

cliente.poupancas[0].depositar(200, 2022, 6, 1);

cliente.poupancas[0].depositar(200, 2022, 7, 1);

cliente.poupancas[0].depositar(200, 2022, 8, 1);

cliente.poupancas[0].depositar(200, 2022, 9, 1);

cliente.poupancas[0].depositar(200, 2022, 10, 1);

cliente.poupancas[0].depositar(200, 2022, 11, 31);

cliente.poupancas[0].sacar(100, 2022, 2, 5);

cliente.poupancas[0].sacar(200, 2022, 6, 8);

console.log(
  `Seu rendimento total foi de: ${cliente.poupancas[0].calcularRendimento()}`
);

console.log("Seu saldo é: " + cliente.poupancas[0].calcularSaldo());
