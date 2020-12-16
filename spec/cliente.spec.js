const Cliente = require('../models/cliente');

test('Propriedades da classe de cliente', () => {
  let cliente = new Cliente(1, "Danilo",  "418.825.350-90")
  expect(cliente.id).toBe(1);
  expect(cliente.nome).toBe("Danilo");
  expect(cliente.cpf).toBe("418.825.350-90");
});