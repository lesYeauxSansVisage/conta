"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../Cliente");
const ContaPoupan_a_1 = require("../constuctors/ContaPoupan\u00E7a");
const Endereco_1 = require("../constuctors/Endereco");
const endereco1 = new Endereco_1.Endereco("6198400", "Vila", "15", "Próximo da igreja", "Salvador", "BA");
const cliente = new Cliente_1.Cliente("12345678901", "Jonas", "983887744", new ContaPoupan_a_1.ContaPoupanca(), endereco1);
cliente.contas[0].rentabilidadeMensal = 1;
cliente.contas[0].depositar(200, new Date(2022, 0, 1));
cliente.contas[0].depositar(200, new Date(2022, 1, 1));
cliente.contas[0].depositar(200, new Date(2022, 2, 1));
cliente.contas[0].depositar(200, new Date(2022, 3, 1));
cliente.contas[0].depositar(200, new Date(2022, 4, 1));
cliente.contas[0].depositar(200, new Date(2022, 5, 1));
cliente.contas[0].depositar(200, new Date(2022, 6, 1));
cliente.contas[0].depositar(200, new Date(2022, 7, 1));
cliente.contas[0].depositar(200, new Date(2022, 8, 1));
cliente.contas[0].depositar(200, new Date(2022, 9, 1));
cliente.contas[0].depositar(200, new Date(2022, 10, 1));
cliente.contas[0].depositar(200, new Date(2022, 11, 31));
cliente.contas[0].sacar(100, new Date(2022, 2, 5));
cliente.contas[0].sacar(200, new Date(2022, 6, 8));
console.log(`Seu rendimento total foi de: ${cliente.contas[0].calcularRendimento()}`);
console.log("Seu saldo é: " + cliente.contas[0].calcularSaldo());
