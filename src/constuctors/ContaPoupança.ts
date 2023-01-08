import { Conta } from "../abstract/Conta";
import { Cliente } from "../Cliente";

export class ContaPoupanca extends Conta {
  private _rentabilidadeMensal: number = 0;

  private _rendimentos: number = 0;

  public get rendimentos(): number {
    return this._rendimentos;
  }

  public set rendimentos(value: number) {
    this._rendimentos = value;
  }

  constructor(numero: string, cliente: Cliente) {
    super(numero, cliente);
  }

  public calcularSaldo(): number {
    const totalCreditos =
      this.creditos.length > 0
        ? this.creditos.reduce((acc, curr) => acc + curr.valor, 0)
        : 0;

    const totalDebitos =
      this.debitos.length > 0
        ? this.debitos.reduce((acc, curr) => acc + curr.valor, 0)
        : 0;

    return Number(
      (totalCreditos - totalDebitos + this._rendimentos).toFixed(2)
    );
  }

  public calcularRendimento(): number {
    let rendimentosMensais = 0;

    const creditosPorData = this.creditos.sort(
      (a: any, b: any) => a.data - b.data
    );

    const debitosPorData = this.debitos.sort(
      (a: any, b: any) => a.data - b.data
    );

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
      const dataAtual = new Date(
        dataPrimeiroCredito.getFullYear(),
        dataPrimeiroCredito.getMonth() + i,
        1
      );
      const anoAtual = dataAtual.getFullYear();
      let mêsAtual = dataAtual.getMonth();

      const totalCreditosMensais = creditosPorData
        .filter(
          (credito) =>
            credito.data.getMonth() <= mêsAtual &&
            credito.data.getFullYear() <= anoAtual
        )
        .reduce((acc, curr) => curr.valor + acc, 0);

      const totalDebitosMensais = debitosPorData
        .filter(
          (debitos) =>
            debitos.data.getMonth() <= dataPrimeiroCredito.getMonth() + i
        )
        .reduce((acc, curr) => curr.valor + acc, 0);

      const totalMensal =
        totalCreditosMensais - totalDebitosMensais + this.rendimentos;

      rendimentosMensais = Number(
        (totalMensal * (this.rentabilidadeMensal / 100)).toFixed(2)
      );

      console.log(
        `Seu rendimento mensal no mês de ${nomeDosMeses[mêsAtual]} foi de ${rendimentosMensais}R$`
      );

      this.rendimentos += rendimentosMensais;
    }

    return Number(this.rendimentos.toFixed(2));
  }

  public get rentabilidadeMensal(): number {
    return this._rentabilidadeMensal;
  }

  public set rentabilidadeMensal(value: number) {
    this._rentabilidadeMensal = value;
  }
}

function monthDiff(d1: Date, d2: Date) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
