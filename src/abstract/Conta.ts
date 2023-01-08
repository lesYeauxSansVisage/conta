import { Cliente } from "../Cliente";
import { Credito } from "../constuctors/Crédito";

import { Debito } from "../constuctors/Débito";

export abstract class Conta {
  private _numero: string;

  private _creditos: Credito[] = [];

  private _debitos: Debito[] = [];

  private _cliente: Cliente;

  constructor(numero: string, cliente: Cliente) {
    this._numero = numero;
    this._cliente = cliente;
  }

  public get numero(): string {
    return this._numero;
  }

  public set numero(value: string) {
    this._numero = value;
  }

  public depositar(valor: number, ano: number, mês: number, dia: number) {
    const data = new Date(ano, mês, dia);

    const novoCredito = new Credito(valor, data);
    this._creditos.push(novoCredito);
  }

  public sacar(valor: number, ano: number, mês: number, dia: number) {
    if (this.calcularSaldo() - valor < 0) {
      throw new Error(
        "Valor do saque não pode ser maior que a soma do limite com os créditos!"
      );
    }

    const data = new Date(ano, mês, dia);
    const novoDebito = new Debito(valor, data);
    this._debitos.push(novoDebito);
  }

  public abstract calcularSaldo(): number;

  public get debitos(): Debito[] {
    return this._debitos;
  }

  public set debitos(value: Debito[]) {
    this._debitos = value;
  }

  public get creditos(): Credito[] {
    return this._creditos;
  }
}
