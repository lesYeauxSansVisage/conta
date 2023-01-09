"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
class Cargo {
    constructor(nome) {
        this._funcionarios = [];
        this._nome = nome;
    }
    get funcionarios() {
        return this._funcionarios;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    adicionarFuncionario(funcionario) {
        this._funcionarios.push(funcionario);
    }
}
exports.Cargo = Cargo;
