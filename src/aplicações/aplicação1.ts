import { Funcionario } from "../Funcionario";

const gerente = new Funcionario(
  "33333333311",
  "João",
  "85989445566",
  2500,
  "Gerente"
);

const atendente = new Funcionario(
  "44444444411",
  "William",
  "85987445566",
  1500,
  "Atendente"
);

console.log(gerente);
console.log(atendente);
