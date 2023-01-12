"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./abstract/Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(cpf, name, telefone, conta, endereço) {
        super(cpf, name, telefone);
        this._enderecos = [];
        this._contas = [];
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
        conta.cliente = this;
        conta.numero =
            this.contas.length > 0
                ? String(+this.contas[this.contas.length - 1].numero + 1)
                : "1";
        this.contas.push(conta);
    }
    listarEnderecos() {
        this.enderecos.forEach((endereco) => console.log(endereco));
    }
    get enderecos() {
        return this._enderecos;
    }
    get contas() {
        return this._contas;
    }
}
exports.Cliente = Cliente;
