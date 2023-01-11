import { Cargo } from "../constuctors/Cargo";
import { Funcionario } from "../Funcionario";

const gerente = new Cargo("Gerente");
const atendente = new Cargo("Atendente");

const funcionário1 = new Funcionario(
  "33333333311",
  "João",
  "85989445566",
  2500,
  gerente
);

const funcionário2 = new Funcionario(
  "44444444411",
  "William",
  "85987445566",
  1500,
  atendente
);

console.log(funcionário1);
console.log(funcionário2);
