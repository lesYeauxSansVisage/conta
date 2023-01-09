"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf, cliente) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
        this._cliente = cliente;
    }
    get cep() {
        return this._cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    get numero() {
        return this._numero;
    }
    get complemento() {
        return this._complemento;
    }
    get cidade() {
        return this._cidade;
    }
    get uf() {
        return this._uf;
    }
    set cep(value) {
        this._cep = value;
    }
    set logradouro(value) {
        this._logradouro = value;
    }
    set numero(value) {
        this._numero = value;
    }
    set complemento(value) {
        this._complemento = value;
    }
    set cidade(value) {
        this._cidade = value;
    }
    set uf(value) {
        this._uf = value;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
}
exports.Endereco = Endereco;
