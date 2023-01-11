"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("../abstract/Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor() {
        super(...arguments);
        this._limite = 0;
    }
    transferir(contaDestino, valor, data = new Date()) {
        this.sacar(valor, data);
        contaDestino.depositar(valor, data);
    }
    calcularSaldo() {
        const totalCreditos = this.creditos.length > 0
            ? this.creditos.reduce((acc, curr) => acc + curr.valor, 0)
            : 0;
        const totalDebitos = this.debitos.length > 0
            ? this.debitos.reduce((acc, curr) => acc + curr.valor, 0)
            : 0;
        return totalCreditos - totalDebitos + this.limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
}
exports.ContaCorrente = ContaCorrente;
