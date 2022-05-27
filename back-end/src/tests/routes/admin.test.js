const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User } = require('../../database/models');
const { mockUser, mockAdmin, mockNewUser } = require('../mocks/users');
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

  describe('Ao passar token de não-admin', () => {
    test('Retorna erro 401', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);

      const response = await request(app)
        .get('/admin/manage')
        .set('Authorization', JwtToken.generate(mockUser));

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de usuários', async () => {
      sinon.stub(User, 'findOne').resolves(mockAdmin);
      sinon.stub(User, 'findAll').resolves([]);

      const response = await request(app)
        .get('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});

describe('Rota POST /admin/manage', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .post('/admin/manage');

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar na API, atualmente gera erro 500
  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .post('/admin/manage')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token de não-admin', () => {
    test('Retorna erro 401', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);

      const response = await request(app)
        .post('/admin/manage')
        .set('Authorization', JwtToken.generate(mockUser))
        .send(mockNewUser);

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar e-mail existente', () => {
    test('Retorna erro 409', async () => {
      const mockFind = sinon.stub(User, 'findOne');
      mockFind.onFirstCall().resolves(mockAdmin);
      mockFind.onSecondCall().resolves(mockUser);

      const response = await request(app)
        .post('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send(mockNewUser);

      expect(response).to.have.status(409)
    });
  });

  describe('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .post('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send({});

      expect(response).to.have.status(400)
    });
  });

  describe('Ao passar token e dados corretamente', () => {
    test('Cria um novo usuário', async () => {
      const mockFind = sinon.stub(User, 'findOne');
      mockFind.onFirstCall().resolves(mockAdmin);
      mockFind.onSecondCall().resolves(null);

      sinon.stub(User, 'create').resolves(mockUser);

      const response = await request(app)
        .post('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send(mockNewUser)

      expect(response).to.have.status(201);
      expect(response.body).to.deep.equal(mockUser)
    });
  });
});

describe('Rota PUT /admin/manage', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .put('/admin/manage');

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar na API, atualmente gera erro 500
  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .put('/admin/manage')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token de não-admin', () => {
    test('Retorna erro 401', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);

      const response = await request(app)
        .put('/admin/manage')
        .set('Authorization', JwtToken.generate(mockUser))
        .send(mockNewUser);

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .put('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send({});

      expect(response).to.have.status(400)
    });
  });

  describe('Ao passar token e dados corretamente', () => {
    test('Atualiza o usuário', async () => {
      const mockFind = sinon.stub(User, 'findOne');
      mockFind.onFirstCall().resolves(mockAdmin);
      mockFind.onSecondCall().resolves(mockUser);

      sinon.stub(User, 'update').resolves([1]);

      const response = await request(app)
        .put('/admin/manage')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send(mockNewUser)

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(mockUser)
    });
  });
});

describe('Rota DELETE /admin/manage', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .delete('/admin/manage/3');

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar na API, atualmente gera erro 500
  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .delete('/admin/manage/3')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token de não-admin', () => {
    test('Retorna erro 401', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);

      const response = await request(app)
        .delete('/admin/manage/3')
        .set('Authorization', JwtToken.generate(mockUser))
        .send(mockNewUser);

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar verificação de id
  describe.skip('Ao passar id inválido', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .delete('/admin/manage/3')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send({});

      expect(response).to.have.status(400)
    });
  });

  describe('Ao passar token e dados corretamente', () => {
    test('Remove o usuário', async () => {
      const mockFind = sinon.stub(User, 'findOne');
      mockFind.onFirstCall().resolves(mockAdmin);
      mockFind.onSecondCall().resolves(mockUser);

      sinon.stub(User, 'destroy').resolves(1);

      const response = await request(app)
        .delete('/admin/manage/3')
        .set('Authorization', JwtToken.generate(mockAdmin))
        .send(mockNewUser)

      expect(response).to.have.status(204);
    });
  });
});
