import { Conta } from "./abstract/Conta";
import { Pessoa } from "./abstract/Pessoa";
import { ContaCorrente } from "./constuctors/ContaCorrente";
import { ContaPoupanca } from "./constuctors/ContaPoupança";
import { Endereco } from "./constuctors/Endereco";
import { IUsuario } from "./interfaces/IUsuario";

export class Cliente extends Pessoa implements IUsuario {
  private _enderecos: Endereco[] = [];

  private _correntes: ContaCorrente[] = [];

  private _poupancas: ContaPoupanca[] = [];

  constructor(
    cpf: string,
    name: string,
    telefone: string,
    conta: ContaCorrente | ContaPoupanca,
    endereço: Endereco
  ) {
    super(cpf, name, telefone);
    this.adicionarEndereco(endereço);
    this.adicionarConta(conta);
  }

  autenticar(): boolean {
    return true;
  }

  public adicionarEndereco(endereco: Endereco) {
    endereco.cliente = this;
    this.enderecos.push(endereco);
  }

  public adicionarConta(conta: ContaCorrente | ContaPoupanca) {
    if (conta instanceof ContaCorrente) {
      conta.cliente = this;
      // O numero da conta será igual ao número da conta anterior a esta ou, caso não haja conta, será igual a 0 para evitar duplicações
      conta.numero =
        this.correntes.length > 0
          ? String(+this.correntes[this.correntes.length - 1].numero + 1)
          : "1";

      this._correntes.push(conta);
    }

    if (conta instanceof ContaPoupanca) {
      conta.cliente = this;
      conta.numero =
        this.poupancas.length > 0
          ? String(+this.correntes[this.correntes.length - 1].numero + 1)
          : "1";

      this._poupancas.push(conta);
    }
  }

  public listarEnderecos() {
    this.enderecos.forEach((endereco) => console.log(endereco));
  }

  public get enderecos(): Endereco[] {
    return this._enderecos;
  }

  public get correntes(): ContaCorrente[] {
    return this._correntes;
  }

  public get poupancas(): ContaPoupanca[] {
    return this._poupancas;
  }
}
