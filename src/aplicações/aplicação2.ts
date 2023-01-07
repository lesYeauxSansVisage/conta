import { Cliente } from "../Cliente";

// A aplicação 2 consiste em adicionar 3 endereços a um cliente e printar os endereços

const cliente = new Cliente(
  "55555555511",
  "João",
  "988888888",
  "corrente",
  "61984000",
  "Rua",
  "1",
  "Próxima ao colégio",
  "São Paulo",
  "SP"
);

cliente.adiconarEndereco(
  "61983000",
  "Ladeira",
  "13",
  "Próximo a praça",
  "Salvador",
  "BA"
);

cliente.adiconarEndereco(
  "67555000",
  "Vila",
  "13",
  "Próximo a igreja",
  "Porto Alegre",
  "RS"
);

cliente.listarEnderecos();
