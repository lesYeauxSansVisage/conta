"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./abstract/Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(cpf, name, telefone, salario, cargo) {
        super(cpf, name, telefone);
        this._cargos = [];
        this._salario = salario;
        this.adicionarCargo(cargo);
    }
    get cargos() {
        return this._cargos;
    }
    set cargos(value) {
        this._cargos = value;
    }
    autenticar() {
        return true;
    }
    adicionarCargo(cargo) {
        cargo.adicionarFuncionario(this);
        this._cargos.push(cargo);
    }
}
exports.Funcionario = Funcionario;
