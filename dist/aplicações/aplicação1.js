"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cargo_1 = require("../constuctors/Cargo");
const Funcionario_1 = require("../Funcionario");
const gerente = new Cargo_1.Cargo("Gerente");
const atendente = new Cargo_1.Cargo("Atendente");
const funcionário1 = new Funcionario_1.Funcionario("33333333311", "João", "85989445566", 2500, gerente);
const funcionário2 = new Funcionario_1.Funcionario("44444444411", "William", "85987445566", 1500, atendente);
console.log(funcionário1);
console.log(funcionário2);
