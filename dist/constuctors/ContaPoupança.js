"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("../abstract/Conta");
class ContaPoupanca extends Conta_1.Conta {
    constructor(numero, cliente) {
        super(numero, cliente);
        this._rentabilidadeMensal = 0;
        this._rendimentos = 0;
    }
    get rendimentos() {
        return this._rendimentos;
    }
    set rendimentos(value) {
        this._rendimentos = value;
    }
    calcularSaldo() {
        const totalCreditos = this.creditos.length > 0
            ? this.creditos.reduce((acc, curr) => acc + curr.valor, 0)
            : 0;
        const totalDebitos = this.debitos.length > 0
            ? this.debitos.reduce((acc, curr) => acc + curr.valor, 0)
            : 0;
        return Number((totalCreditos - totalDebitos + this._rendimentos).toFixed(2));
    }
    calcularRendimento() {
        let rendimentosMensais = 0;
        const creditosPorData = this.creditos.sort((a, b) => a.data - b.data);
        const debitosPorData = this.debitos.sort((a, b) => a.data - b.data);
        const dataPrimeiroCredito = creditosPorData[0].data;
        const dataÚltimoCredito = creditosPorData[creditosPorData.length - 1].data;
        const meses = monthDiff(dataPrimeiroCredito, dataÚltimoCredito);
        const nomeDosMeses = [
            "Janeiro",
            "Fevereiro",
            "Marco",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Septembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ];
        if (meses <= 0) {
            console.log("Ainda não houve rendimentos");
            return 0;
        }
        for (let i = 0; i < meses; i++) {
            const dataAtual = new Date(dataPrimeiroCredito.getFullYear(), dataPrimeiroCredito.getMonth() + i, 1);
            const anoAtual = dataAtual.getFullYear();
            let mêsAtual = dataAtual.getMonth();
            const totalCreditosMensais = creditosPorData
                .filter((credito) => credito.data.getMonth() <= mêsAtual &&
                credito.data.getFullYear() <= anoAtual)
                .reduce((acc, curr) => curr.valor + acc, 0);
            const totalDebitosMensais = debitosPorData
                .filter((debitos) => debitos.data.getMonth() <= dataPrimeiroCredito.getMonth() + i)
                .reduce((acc, curr) => curr.valor + acc, 0);
            const totalMensal = totalCreditosMensais - totalDebitosMensais + this.rendimentos;
            rendimentosMensais = Number((totalMensal * (this.rentabilidadeMensal / 100)).toFixed(2));
            console.log(`Seu total mensal no mês de ${nomeDosMeses[mêsAtual]} foi de ${totalMensal}.`);
            console.log(`Seu rendimento no mês de ${nomeDosMeses[mêsAtual]} foi de ${rendimentosMensais}R$`);
            this.rendimentos += rendimentosMensais;
        }
        return Number(this.rendimentos.toFixed(2));
    }
    get rentabilidadeMensal() {
        return this._rentabilidadeMensal;
    }
    set rentabilidadeMensal(value) {
        this._rentabilidadeMensal = value;
    }
}
exports.ContaPoupanca = ContaPoupanca;
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
