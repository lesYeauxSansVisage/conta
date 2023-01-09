"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../Cliente");
const cliente = new Cliente_1.Cliente("12345678901", "Jonas", "983887744", "poupança", "50555555", "Ladeira", "15", "Próximo a pracinha", "São Paulo", "SP");
cliente.poupancas[0].rentabilidadeMensal = 10;
cliente.poupancas[0].depositar(100, 2023, 0, 1);
cliente.poupancas[0].sacar(50, 2023, 0, 1);
cliente.poupancas[0].depositar(100, 2023, 3, 1);
console.log("Seu rendimento total é: " + cliente.poupancas[0].calcularRendimento() + "R$");
console.log("Seu saldo é: " + cliente.poupancas[0].calcularSaldo() + "R$");
