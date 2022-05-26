const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User } = require('../../database/models');
const { mockUser } = require('../mocks/users');

describe('Rota POST /login', () => {
  beforeEach(sinon.restore);

  describe('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      sinon.stub(User, 'findOne').rejects();

      const response = await request(app)
        .post('/login');

      expect(response).to.have.status(400)
    });
  });
  describe('Ao passar email ou senha inválida', () => {
    test('Retorna erro 404', async () => {
      sinon.stub(User, 'findOne').resolves(null);

      const response = await request(app)
        .post('/login')
        .send({ email: 'emailerrado@email.com', password: 'senha errada' });

      expect(response).to.have.status(404)
    });
  });

  describe('Ao passar email e senha corretos', () => {
    test('Retorna os dados do usuário e um token', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);

      const response = await request(app)
        .post('/login')
        .send({ email: "zebirita@email.com", password: "$#zebirita#$" });

      expect(response).to.have.status(200);
      expect(response.body).to.have.property('token');
    });
  });
});
