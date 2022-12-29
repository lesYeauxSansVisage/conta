import { Cargo } from "./Cargo";

class Funcionario {
  private _salario: number;

  constructor(salario: number) {
    this._salario = salario;
  }

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }
}
