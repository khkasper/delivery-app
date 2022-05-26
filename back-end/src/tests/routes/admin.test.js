const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User } = require('../../database/models');
const { mockUser, mockAdmin } = require('../mocks/users');
const { JwtToken } = require('../../utils');

describe('Rota GET /admin/manage', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/admin/manage');

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar na API, atualmente gera erro 500
  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/admin/manage')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de usuários', async () => {
      sinon.stub(User, 'findOne').resolves(mockAdmin);
      sinon.stub(User, 'findAll').resolves([]);
      sinon.stub(User, 'create').resolves(mockUser);

      const response = await request(app)
        .get('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});
