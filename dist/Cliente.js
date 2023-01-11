"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./abstract/Pessoa");
const ContaCorrente_1 = require("./constuctors/ContaCorrente");
const ContaPoupan_a_1 = require("./constuctors/ContaPoupan\u00E7a");
class Cliente extends Pessoa_1.Pessoa {
    constructor(cpf, name, telefone, conta, endereço) {
        super(cpf, name, telefone);
        this._enderecos = [];
        this._correntes = [];
        this._poupancas = [];
        this.adicionarEndereco(endereço);
        this.adicionarConta(conta);
    }
    autenticar() {
        return true;
    }
    adicionarEndereco(endereco) {
        endereco.cliente = this;
        this.enderecos.push(endereco);
    }
    adicionarConta(conta) {
        if (conta instanceof ContaCorrente_1.ContaCorrente) {
            conta.cliente = this;
            conta.numero =
                this.correntes.length > 0
                    ? String(+this.correntes[this.correntes.length - 1].numero + 1)
                    : "1";
            this._correntes.push(conta);
        }
        if (conta instanceof ContaPoupan_a_1.ContaPoupanca) {
            conta.cliente = this;
            conta.numero =
                this.poupancas.length > 0
                    ? String(+this.correntes[this.correntes.length - 1].numero + 1)
                    : "1";
            this._poupancas.push(conta);
        }
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
