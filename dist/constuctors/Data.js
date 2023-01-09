"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia, mês, ano) {
        this.dia = dia;
        this.mês = mês;
        this.ano = ano;
        if (Number(dia) > 31 || Number(dia) < 0) {
            throw new Error("Dia selecionado não é válido");
        }
        if (Number(mês) > 12 || Number(mês) < 0) {
            throw new Error("Mês selecionado não é válido");
        }
        if (Number(ano) < 0) {
            throw new Error("Ano selecionado não é válido!");
        }
    }
}
exports.Data = Data;
