import { Data } from "./Data";

export class Credito {
  private _valor: number;

  private _data: Date;

  constructor(valor: number, data: Date) {
    this._valor = valor;
    this._data = data;
  }

  public get data(): Date {
    return this._data;
  }

  public get valor(): number {
    return this._valor;
  }
}
