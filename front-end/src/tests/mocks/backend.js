export const validUser = {
  userId: 1,
  name: 'Fulano',
  email: 'teste@email.com',
  role: 'user',
};

export const validAdmin = { ...validUser, role: 'admin' };

export const validSeller = { ...validUser, role: 'seller' };

export const responses = {
  login: {
    notFound: { status: 404, data: { message: 'User not found' } },
    userOk: { status: 200, data: { token: 'someNiceToken', user: validUser } },
    adminOk: { status: 200, data: { token: 'someNiceToken', user: validAdmin } },
    sellerOk: { status: 200, data: { token: 'someNiceToken', user: validSeller } },
  },
};

export const routes = {
  home: '/',
  login: '/login',
  adminHome: '/admin/manage',
  customerHome: '/customer/products',
  sellerHome: '/seller/orders',
};
