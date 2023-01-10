import { Conta } from "../abstract/Conta";
import { Cliente } from "../Cliente";

export class ContaCorrente extends Conta {
  private _limite: number = 0;

  constructor(numero: string) {
    super(numero);
  }

  public transferir(
    contaDestino: Conta,
    valor: number,
    dia: number,
    mês: number,
    ano: number
  ) {
    console.log(
      `${this.cliente.nome} transferiu ${valor} para ${contaDestino.cliente.nome}`
    );

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
