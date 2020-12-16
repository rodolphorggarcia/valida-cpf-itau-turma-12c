const Cliente = require('../models/cliente');

test('Propriedades da classe de cliente', () => {
  let cliente = new Cliente(1, "Danilo",  "418.825.350-90")
  expect(cliente.id).toBe(1);
  expect(cliente.nome).toBe("Danilo");
  expect(cliente.cpf).toBe("418.825.350-90");
});

test('Dado que eu tenho um CPF válido, o mesmo precisa dar certo', () => {
  let cliente = new Cliente(1, "Danilo",  "418.825.350-90")
  expect(cliente.validarCPF()).toBe(true);
});

test('Dado que eu tenho um CPF inválido, o mesmo precisa dar errado', () => {
  let cliente = new Cliente(1, "Danilo",  "418.825.350-91")
  expect(cliente.validarCPF()).toBe(false);
});

test('Testando CPF 11111111111', () => {
  let cliente = new Cliente(1, "Danilo",  "11111111111")
  expect(cliente.validarCPF()).toBe(false);
});

test('Testando CPF 111111111111', () => {
  let cliente = new Cliente(1, "Danilo",  "111111111111")
  expect(cliente.validarCPF()).toBe(false);
});