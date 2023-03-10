"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../Cliente");
const ContaCorrente_1 = require("../constuctors/ContaCorrente");
const ContaPoupan_a_1 = require("../constuctors/ContaPoupan\u00E7a");
const Endereco_1 = require("../constuctors/Endereco");
const endereco1 = new Endereco_1.Endereco("6198400", "Vila", "15", "Próximo da igreja", "Salvador", "BA");
const endereco2 = new Endereco_1.Endereco("6198555", "Ladeira", "10", "Próximo da praça", "São Paulo", "SP");
const cliente1 = new Cliente_1.Cliente("12345678901", "João", "988887744", new ContaCorrente_1.ContaCorrente(), endereco1);
const cliente2 = new Cliente_1.Cliente("12345678901", "William", "988887744", new ContaPoupan_a_1.ContaPoupanca(), endereco2);
cliente1.contas[0].depositar(1000);
cliente2.contas[0].depositar(1000);
console.log(`O saldo de ${cliente1.nome} é ${cliente1.contas[0].calcularSaldo()}.`);
console.log(`O saldo de ${cliente2.nome} é ${cliente2.contas[0].calcularSaldo()}.`);
cliente1.contas[0].transferir(cliente2.contas[0], 500);
console.log(`O saldo de ${cliente1.nome} é ${cliente1.contas[0].calcularSaldo()}.`);
console.log(`O saldo de ${cliente2.nome} é ${cliente2.contas[0].calcularSaldo()}.`);
