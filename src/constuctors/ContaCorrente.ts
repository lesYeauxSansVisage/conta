import { Conta } from "../abstract/Conta";
import { Cliente } from "../Cliente";
import { Data } from "./Data";

export class ContaCorrente extends Conta {
  private _limite: number = 0;

  constructor(numero: string, cliente: Cliente) {
    super(numero, cliente);
  }

  public transferir(
    contaDestino: Conta,
    valor: number,
    dia: number,
    mês: number,
    ano: number
  ) {
    const data = new Date(ano, mês, dia);
    this.sacar(valor, dia, mês, ano);
    contaDestino.depositar(valor, ano, mês, dia);
  }

  calcularSaldo(): number {
    const totalCreditos =
      this.creditos.length > 0
        ? this.creditos.reduce((acc, curr) => acc + curr.valor, 0)
        : 0;

    const totalDebitos =
      this.debitos.length > 0
        ? this.debitos.reduce((acc, curr) => acc + curr.valor, 0)
        : 0;

    return totalCreditos - totalDebitos + this.limite;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }
}
