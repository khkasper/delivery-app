const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User } = require('../../database/models');

describe('Rota /register', () => {
  beforeEach(sinon.restore);

  describe('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      sinon.stub(User, 'findOne').rejects();

      const response = await request(app)
        .post('/register');

      expect(response).to.have.status(400)
    });
  });

  describe('Ao passar email existente', () => {
    test('Retorna erro 404', async () => {
      sinon.stub(User, 'findOne').resolves({
        email: "zebirita@email.com",
        id: 3,
        name: "Cliente Zé Birita",
        role: "customer",
      });

      const response = await request(app)
        .post('/register')
        .send({
          email: "zebirita@email.com",
          password: "$#zebirita#$",
          name: 'Cliente Zé Birita',
        });

      expect(response).to.have.status(409);
    });
  });

  describe('Ao passar dados corretos', () => {
    test('Retorna os dados do usuário e um token', async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves({
        email: "zebirita@email.com",
        id: 3,
        name: "Cliente Zé Birita",
        role: "customer",
      });

      const response = await request(app)
        .post('/register')
        .send({
          email: "zebirita@email.com",
          password: "$#zebirita#$",
          name: 'Cliente Zé Birita',
        });

      expect(response).to.have.status(201);
      expect(response.body).to.have.property('token');
    });
  });
});
