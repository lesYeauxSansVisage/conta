import { Cliente } from "../Cliente";

const cliente1 = new Cliente(
  "12345678901",
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

const cliente2 = new Cliente(
  "12345678901",
  "William",
  "988887744",
  "poupança",
  "4044444",
  "Vila",
  "15",
  "Próximo a escola",
  "São Paulo",
  "SP"
);

cliente1.correntes[0].depositar(1000, 2023, 1, 5);

cliente2.poupancas[0].depositar(1000, 2023, 5, 1);

console.log(
  `O saldo de ${cliente1.nome} é ${cliente1.correntes[0].calcularSaldo()}.`
);

console.log(
  `O saldo de ${cliente2.nome} é ${cliente2.poupancas[0].calcularSaldo()}.`
);

cliente1.correntes[0].transferir(cliente2.poupancas[0], 500, 2023, 1, 5);

console.log(
  `O saldo de ${cliente1.nome} é ${cliente1.correntes[0].calcularSaldo()}.`
);

console.log(
  `O saldo de ${cliente2.nome} é ${cliente2.poupancas[0].calcularSaldo()}.`
);
