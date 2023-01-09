"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(cpf, nome, telefone) {
        if (cpf.length !== 11) {
            throw new Error("CPF Inválido.");
        }
        if (telefone.length < 8) {
            throw new Error("Telefone inválido");
        }
        if (!nome) {
            throw new Error("Insira seu nome, por favor.");
        }
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
    get telefone() {
        return this._telefone;
    }
    set cpf(value) {
        this._cpf = value;
    }
    set nome(value) {
        this._nome = value;
    }
    set telefone(value) {
        this._telefone = value;
    }
}
exports.Pessoa = Pessoa;
