import { Credito } from "../constuctors/Crédito";
import { Debito } from "../constuctors/Débito";

export abstract class Conta {
  private _numero: string;

  private _creditos: Credito[] = [];

  private _debitos: Debito[] = [];

  constructor(numero: string) {
    this._numero = numero;
  }

  public get numero(): string {
    return this._numero;
  }

  public set numero(value: string) {
    this._numero = value;
  }

  public depositar(valor: number) {
    const data = new Date();
    const novoCredito = new Credito(valor, data);
    this._creditos.push(novoCredito);
  }

  public sacar(valor: number, limite: number) {
    if (limite - valor < 0) {
      throw new Error("Valor do saque não pode ser maior que o limite!");
    }

    const data = new Date();
    const novoDebito = new Debito(valor, data);
    this._debitos.push(novoDebito);
  }
}
