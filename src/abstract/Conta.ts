abstract class Conta {
  private _numero: string;

  constructor(numero: string) {
    this._numero = numero;
  }

  public get numero(): string {
    return this._numero;
  }

  public set numero(value: string) {
    this._numero = value;
  }
}
