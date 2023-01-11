"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../Cliente");
const ContaPoupan_a_1 = require("../constuctors/ContaPoupan\u00E7a");
const Endereco_1 = require("../constuctors/Endereco");
const endereco1 = new Endereco_1.Endereco("6198400", "Vila", "15", "Próximo da igreja", "Salvador", "BA");
const endereco2 = new Endereco_1.Endereco("6198555", "Ladeira", "10", "Próximo da praça", "São Paulo", "SP");
const endereco3 = new Endereco_1.Endereco("87645000", "Estrada", "1", "Próximo da escola", "Fortaleza", "CE");
const cliente = new Cliente_1.Cliente("55555555511", "João", "988888888", new ContaPoupan_a_1.ContaPoupanca(), endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);
cliente.listarEnderecos();
