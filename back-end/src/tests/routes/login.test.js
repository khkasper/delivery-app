const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');

describe('Rota /login', () => {
  describe('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .post('/login');
      
      expect(response).to.have.status(400)
    });
  });
  describe('Ao passar email ou senha inválida', () => {
    test('Retorna erro 404');
  });

  describe('Ao passar email e senha corretos', () => {
    test('Retorna os dados do usuário e um token');
  });
});
