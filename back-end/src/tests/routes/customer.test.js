const { describe, test } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect, request } = chai;

const app = require('../../api/app');
const { User, Product, Sale, SaleProduct } = require('../../database/models');
const { mockUser, mockAdmin, mockNewUser } = require('../mocks/users');
const { JwtToken } = require('../../utils');
const { mockCheckout } = require('../mocks/sells');

describe('Rota GET /customer/products', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de produtos', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Product, 'findAll').resolves([]);

      const response = await request(app)
        .get('/customer/products')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});

describe('Rota GET /customer/products/:id', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products/1');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/products/1')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar 
  describe.skip('Ao passar id inexistente', () => {
    test('Retorna erro 404', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Product, 'findOne').resolves(null);

      const response = await request(app)
        .get('/customer/products/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(404);
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna o produto', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Product, 'findOne').resolves({});

      const response = await request(app)
        .get('/customer/products/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({})
    });
  });
});

describe('Rota GET /customer/orders', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/orders');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/orders')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna a lista de produtos', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Sale, 'findAll').resolves([]);

      const response = await request(app)
        .get('/customer/orders')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal([])
    });
  });
});

describe('Rota GET /customer/orders/:id', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/orders/1');

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .get('/customer/orders/1')
        .set('Authorization', 'badBadToken')

      expect(response).to.have.status(401)
    });
  });

  // TODO: implementar 
  describe.skip('Ao passar id inexistente', () => {
    test('Retorna erro 404', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Sale, 'findOne').resolves(null);

      const response = await request(app)
        .get('/customer/orders/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(404);
    });
  });

  describe('Ao passar token corretamente', () => {
    test('Retorna o produto', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser);
      sinon.stub(Sale, 'findOne').resolves({});

      const response = await request(app)
        .get('/customer/orders/1')
        .set('Authorization', JwtToken.generate(mockUser))

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({})
    });
  });
});

describe('Rota POST /customer/checkout', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .post('/customer/checkout')
        .send(mockCheckout);

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .post('/customer/checkout')
        .set('Authorization', 'badBadToken')
        .send(mockCheckout);

      expect(response).to.have.status(401)
    });
  });

  // TODO: validação de dados do checkout
  describe.skip('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .post('/customer/checkout')
        .set('Authorization', JwtToken.generate(mockUser))
        .send({});

      expect(response).to.have.status(400)
    });
  });

  describe('Ao passar token e dados corretamente', () => {
    test('Realiza a venda', async () => {
      sinon.stub(Sale, 'create').resolves({ id: 1 });
      sinon.stub(SaleProduct, 'create').resolves({});

      const response = await request(app)
        .post('/customer/checkout')
        .set('Authorization', JwtToken.generate(mockUser))
        .send(mockCheckout);

      expect(response).to.have.status(201);
      expect(response.body).to.deep.equal({ id: 1, orders: [{}] })
    });
  });
});

describe('Rota PATCH /customer/orders/:id/update', () => {
  beforeEach(sinon.restore);

  describe('Ao não passar token', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .patch('/customer/orders/1/update')
        .send({ status: 'Preparando' });

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar token inválido', () => {
    test('Retorna erro 401', async () => {
      const response = await request(app)
        .patch('/customer/orders/1/update')
        .set('Authorization', 'badBadToken')
        .send({ status: 'Preparando' });

      expect(response).to.have.status(401)
    });
  });

  describe.skip('Ao passar dados inválidos', () => {
    test('Retorna erro 400', async () => {
      const response = await request(app)
        .patch('/customer/orders/1/update')
        .set('Authorization', JwtToken.generate(mockUser))
        .send({});

      expect(response).to.have.status(400)
    });
  });

  describe.skip('Ao passar id de pedido inválido', () => {

    test('Retorna erro 404', async () => {
      sinon.stub(Sale, 'findOne').resolves(null);
      const response = await request(app)
        .patch('/customer/orders/1/update')
        .set('Authorization', JwtToken.generate(mockUser))
        .send({});

      expect(response).to.have.status(404)
    });
  });

  describe('Ao passar token e dados corretamente', () => {
    test('Atualiza o pedido', async () => {
      sinon.stub(Sale, 'update').resolves([1]);
      sinon.stub(Sale, 'findOne').resolves({});

      const response = await request(app)
        .patch('/customer/orders/1/update')
        .set('Authorization', JwtToken.generate(mockUser))
        .send({ status: 'Preparando' });

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({})
    });
  });
});
