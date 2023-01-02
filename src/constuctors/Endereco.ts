import { Cliente } from "../Cliente";

export class Endereco {
  private _cep: string;

  private _logradouro: string;

  private _numero: string;

  private _complemento: string;

  private _cidade: string;

  private _uf: string;

  private _cliente: Cliente;

  constructor(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    cidade: string,
    uf: string,
    cliente: Cliente
  ) {
    this._cep = cep;
    this._logradouro = logradouro;
    this._numero = numero;
    this._complemento = complemento;
    this._cidade = cidade;
    this._uf = uf;
    this._cliente = cliente;
  }

  public get cep(): string {
    return this._cep;
  }

  public get logradouro(): string {
    return this._logradouro;
  }

  public get numero(): string {
    return this._numero;
  }

  public get complemento(): string {
    return this._complemento;
  }

  public get cidade(): string {
    return this._cidade;
  }

  public get uf(): string {
    return this._uf;
  }

  public set cep(value: string) {
    this._cep = value;
  }

  public set logradouro(value: string) {
    this._logradouro = value;
  }

  public set numero(value: string) {
    this._numero = value;
  }

  public set complemento(value: string) {
    this._complemento = value;
  }

  public set cidade(value: string) {
    this._cidade = value;
  }

  public set uf(value: string) {
    this._uf = value;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }

  public set cliente(value: Cliente) {
    this._cliente = value;
  }
}
