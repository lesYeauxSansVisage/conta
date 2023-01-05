export abstract class Pessoa {
  private _cpf: string;

  private _nome: string;

  private _telefone: string;

  constructor(cpf: string, nome: string, telefone: string) {
    if (cpf.length !== 11) {
      throw new Error("CPF Inválido.");
    }

    if (telefone.length < 8) {
      throw new Error("Telefone inválido");
    }

    if (!nome) {
      throw new Error("Insira seu nome, por favor.");
    }

    this._cpf = cpf;
    this._nome = nome;
    this._telefone = telefone;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public get nome(): string {
    return this._nome;
  }

  public get telefone(): string {
    return this._telefone;
  }

  public set cpf(value: string) {
    this._cpf = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set telefone(value: string) {
    this._telefone = value;
  }
}
