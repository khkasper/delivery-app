describe('Rota /login', () => {
  describe('Ao passar dados inválidos', () => {
    test('Retorna erro 400');
  });
  describe('Ao passar email ou senha inválida', () => {
    test('Retorna erro 404');
  });

  describe('Ao passar email e senha corretos', () => {
    test('Retorna os dados do usuário e um token');
  });
});
