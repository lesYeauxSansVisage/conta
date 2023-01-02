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

const novoFuncionario = new Funcionario(
  "111111111111111",
  "John",
  "8588888888",
  1200,
  "jardineiro"
);

// console.log(novoFuncionario);

console.log(novoFuncionario.cargos[0].funcionarios[0]);
