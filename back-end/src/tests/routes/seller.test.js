const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User, Sale } = require('../../database/models');
const { mockSeller, mockNewUser, mockUser } = require('../mocks/users');
const { JwtToken } = require('../../utils');
const { mockCheckout } = require('../mocks/sells');

describe('Rota GET /seller', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de vendedores', async () => {
      sinon.stub(User, 'findAll').resolves([]);

      const response = await request(app)
        .get('/seller')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});

describe('Rota GET /seller/orders', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller/orders');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller/orders')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar
  describe.skip('Ao passar token não-seller', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller/orders')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de produtos', async () => {
      sinon.stub(User, 'findOne').resolves(mockSeller);
      sinon.stub(Sale, 'findAll').resolves([]);

      const response = await request(app)
        .get('/seller/orders')
        .set('Authorization', JwtToken.generate(mockSeller))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});

describe('Rota GET /seller/orders/:id', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller/orders/1');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller/orders/1')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar
  describe.skip('Ao passar token não-seller', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/seller/orders/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar 
  describe.skip('Ao passar id inexistente', () => {
    test('Retorna erro 404', async () => {
      sinon.stub(User, 'findOne').resolves(mockSeller);
      sinon.stub(Sale, 'findOne').resolves(null);

      const response = await request(app)
        .get('/seller/orders/1')
        .set('Authorization', JwtToken.generate(mockSeller))

      expect(response).to.have.status(404);
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna o produto', async () => {
      sinon.stub(User, 'findOne').resolves(mockSeller);
      sinon.stub(Sale, 'findOne').resolves({});

      const response = await request(app)
        .get('/seller/orders/1')
        .set('Authorization', JwtToken.generate(mockSeller))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({})
    });
  });
});


describe('Rota PATCH /seller/orders/:id/update', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .patch('/seller/orders/1/update')
        .send({ status: 'Preparando' });

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .patch('/seller/orders/1/update')
        .set('Authorization', 'badBadToken')
        .send({ status: 'Preparando' });

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar
  describe.skip('Ao passar token não-seller', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .patch('/seller/orders/1/update')
        .set('Authorization', JwtToken.generate(mockUser))
        .send({ status: 'Preparando' });


      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .patch('/seller/orders/1/update')
        .set('Authorization', JwtToken.generate(mockSeller))
        .send({});

      expect(response).to.have.status(400)
    });
  });

  describe.skip('Ao passar id de pedido inválido', () => {

    test('Retorna erro 404', async () => {
      sinon.stub(Sale, 'findOne').resolves(null);
      const response = await request(app)
        .patch('/seller/orders/1/update')
        .set('Authorization', JwtToken.generate(mockSeller))
        .send({});

      expect(response).to.have.status(404)
    });
  });

  describe('Ao passar token e dados corretamente', () => {
    test('Atualiza o pedido', async () => {
      sinon.stub(Sale, 'update').resolves([1]);
      sinon.stub(Sale, 'findOne').resolves({});

      const response = await request(app)
        .patch('/seller/orders/1/update')
        .set('Authorization', JwtToken.generate(mockSeller))
        .send({ status: 'Preparando' });

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({})
    });
  });
});
