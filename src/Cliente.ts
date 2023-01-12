import { Conta } from "./abstract/Conta";
import { Pessoa } from "./abstract/Pessoa";
import { ContaCorrente } from "./constuctors/ContaCorrente";
import { ContaPoupanca } from "./constuctors/ContaPoupança";
import { Endereco } from "./constuctors/Endereco";
import { IUsuario } from "./interfaces/IUsuario";

export class Cliente extends Pessoa implements IUsuario {
  private _enderecos: Endereco[] = [];

  private _contas: Conta[] = [];

  constructor(
    cpf: string,
    name: string,
    telefone: string,
    conta: Conta,
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

  public adicionarConta(conta: Conta) {
    conta.cliente = this;
    // O numero da conta será igual ao número da conta anterior a esta mais um ou, caso não haja conta, será igual a 0 para evitar duplicações
    conta.numero =
      this.contas.length > 0
        ? String(+this.contas[this.contas.length - 1].numero + 1)
        : "1";

    this.contas.push(conta);
  }

  public listarEnderecos() {
    this.enderecos.forEach((endereco) => console.log(endereco));
  }

  public get enderecos(): Endereco[] {
    return this._enderecos;
  }

  public get contas(): Conta[] {
    return this._contas;
  }
}
