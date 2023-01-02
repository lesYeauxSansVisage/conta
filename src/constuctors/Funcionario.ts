import { Cargo } from "./Cargo";
import { IUsuario } from "../interfaces/IUsuario";

class Funcionario implements IUsuario {
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

  autenticar(): boolean {
    return true;
  }
}
