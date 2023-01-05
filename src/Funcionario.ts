import { Pessoa } from "./abstract/Pessoa";
import { Cargo } from "./constuctors/Cargo";
import { IUsuario } from "./interfaces/IUsuario";

export class Funcionario extends Pessoa implements IUsuario {
  private _cargos: Cargo[] = [];

  private _salario: number;

  public get cargos(): Cargo[] {
    return this._cargos;
  }

  public set cargos(value: Cargo[]) {
    this._cargos = value;
  }

  constructor(
    cpf: string,
    name: string,
    telefone: string,
    salario: number,
    cargo: string
  ) {
    super(cpf, name, telefone);
    this._salario = salario;
    this.adicionarCargo(cargo);
  }

  autenticar(): boolean {
    return true;
  }

  public adicionarCargo(cargo: string) {
    const novoCargo = new Cargo(cargo);
    novoCargo.adicionarFuncionario(this);
    this._cargos.push(novoCargo);
  }
}
