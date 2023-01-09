"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./abstract/Pessoa");
const ContaCorrente_1 = require("./constuctors/ContaCorrente");
const ContaPoupan_a_1 = require("./constuctors/ContaPoupan\u00E7a");
const Endereco_1 = require("./constuctors/Endereco");
class Cliente extends Pessoa_1.Pessoa {
    constructor(cpf, name, telefone, tipoDeConta, cep, logradouro, numero, complemento, cidade, uf) {
        super(cpf, name, telefone);
        this._enderecos = [];
        this._correntes = [];
        this._poupancas = [];
        this.adiconarEndereco(cep, logradouro, numero, complemento, cidade, uf);
        this.adicionarConta(tipoDeConta, this);
    }
    autenticar() {
        return true;
    }
    adiconarEndereco(cep, logradouro, numero, complemento, cidade, uf) {
        const novoEndereco = new Endereco_1.Endereco(cep, logradouro, numero, complemento, cidade, uf, this);
        this.enderecos.push(novoEndereco);
    }
    adicionarConta(tipoDeConta, cliente) {
        if (tipoDeConta === "corrente") {
            const novaConta = new ContaCorrente_1.ContaCorrente(String(this._correntes.length + 1), cliente);
            this._correntes.push(novaConta);
            return;
        }
        if (tipoDeConta === "poupança") {
            const novaConta = new ContaPoupan_a_1.ContaPoupanca(String(this._correntes.length + 1), cliente);
            this._poupancas.push(novaConta);
            return;
        }
        throw new Error("O tipo de conta selecionada não está disponível");
    }
    listarEnderecos() {
        this.enderecos.forEach((endereco) => console.log(endereco));
    }
    get enderecos() {
        return this._enderecos;
    }
    get correntes() {
        return this._correntes;
    }
    get poupancas() {
        return this._poupancas;
    }
}
exports.Cliente = Cliente;
