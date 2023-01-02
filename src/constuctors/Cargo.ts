import { Funcionario } from "../Funcionario";

export class Cargo {
  private _nome: string;

  private _funcionarios: Funcionario[] = [];

  constructor(nome: string) {
    this._nome = nome;
  }

  public get funcionarios(): Funcionario[] {
    return this._funcionarios;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public adicionarFuncionario(funcionario: Funcionario) {
    this._funcionarios.push(funcionario);
  }
}

const novoCargo = new Cargo("faxineiro");

console.log(novoCargo);
