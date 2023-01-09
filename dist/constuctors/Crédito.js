"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
class Credito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    get data() {
        return this._data;
    }
    get valor() {
        return this._valor;
    }
}
exports.Credito = Credito;
