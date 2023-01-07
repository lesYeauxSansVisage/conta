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
    tipoDeConta: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    cidade: string,
    uf: string
  ) {
    super(cpf, name, telefone);
    this.adiconarEndereco(cep, logradouro, numero, complemento, cidade, uf);
    this.adicionarConta(tipoDeConta, this);
  }

  autenticar(): boolean {
    return true;
  }

  public adiconarEndereco(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    cidade: string,
    uf: string
  ) {
    const novoEndereco = new Endereco(
      cep,
      logradouro,
      numero,
      complemento,
      cidade,
      uf,
      this
    );

    this.enderecos.push(novoEndereco);
  }

  public adicionarConta(tipoDeConta: string, cliente: Cliente) {
    if (tipoDeConta === "corrente") {
      const novaConta = new ContaCorrente(
        String(this._correntes.length + 1),
        cliente
      );
      this._correntes.push(novaConta);
      return;
    }

    if (tipoDeConta === "poupança") {
      const novaConta = new ContaPoupanca(
        String(this._correntes.length + 1),
        cliente
      );
      this._poupancas.push(novaConta);
      return;
    }

    throw new Error("O tipo de conta selecionada não está disponível");
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
