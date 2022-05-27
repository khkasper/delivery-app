const mockAdmin = {
  email: "adm@deliveryapp.com",
  id: 1,
  name: "Delivery App Admin",
  role: "administrator",
}

const mockUser = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  role: "customer",
}

const mockNewUser = {
  email: "zebirita@email.com",
  name: "Cliente Zé Birita",
  role: "customer",
  password: 'somePassword'
}

module.exports = { mockAdmin, mockUser, mockNewUser }
