"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const Cr_dito_1 = require("../constuctors/Cr\u00E9dito");
const D_bito_1 = require("../constuctors/D\u00E9bito");
class Conta {
    constructor() {
        this._creditos = [];
        this._debitos = [];
    }
    depositar(valor, data = new Date()) {
        const novoCredito = new Cr_dito_1.Credito(valor, data);
        this._creditos.push(novoCredito);
    }
    sacar(valor, data = new Date()) {
        if (this.calcularSaldo() - valor < 0) {
            throw new Error("Valor do saque não pode ser maior que a soma do limite com os créditos!");
        }
        const novoDebito = new D_bito_1.Debito(valor, data);
        this._debitos.push(novoDebito);
    }
    get debitos() {
        return this._debitos;
    }
    set debitos(value) {
        this._debitos = value;
    }
    get creditos() {
        return this._creditos;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
}
exports.Conta = Conta;
