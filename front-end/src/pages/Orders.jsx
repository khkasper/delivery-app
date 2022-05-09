import React, { useContext, useEffect } from 'react';
import OrdersCustomer from '../components/OrdersCustomer';
import OrdersSeller from '../components/OrdersSeller';
import GlobalContext from '../context/GlobalContext';

function Orders() {
  const { user, loading, getOrders, setLoading } = useContext(GlobalContext);

  const dataTestIdsCustomer = {
    orderId: 'customer_orders__element-order-id-',
    status: 'customer_orders__element-delivery-status-',
    date: 'customer_orders__element-order-date-',
    price: 'customer_orders__element-card-price-',
  };
  const dataTestIdsSeller = {
    orderId: 'seller_orders__element-order-id-',
    status: 'seller_orders__element-delivery-status-',
    date: 'seller_orders__element-order-date-',
    price: 'seller_orders__element-card-price-',
    address: 'seller_orders__element-card-address-',
  };

  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);
      await getOrders();
      setLoading(false);
    };
    loadOrders();
  }, []);

  if (loading) return <div>Carregando</div>;

  return (
    <main>
      { user.role === 'customer'
      && <OrdersCustomer dataTestIdsCustomer={ dataTestIdsCustomer } />}
      { user.role === 'seller'
      && <OrdersSeller dataTestIdsSeller={ dataTestIdsSeller } />}

      {/* { user.role === 'customer'
      && (
        <NavBar>
          <NavItem
            to="/customer/products"
            name="PRODUTOS"
            testId="customer_products__element-navbar-link-products"
          />
          <NavItem
            to="/customer/orders"
            name="MEUS PEDIDOS"
            testId="customer_products__element-navbar-link-orders"
          />
        </NavBar>)}
      { user.role === 'seller'
      && (
        <NavBar>
          <NavItem
            to="/seller/orders"
            name="PEDIDOS"
            testId="customer_products__element-navbar-link-orders"
          />
        </NavBar>)}
      {user.role === 'customer' && ordersCustomer.map((order, index) => (
        <OrderItem
          key={ index }
          testIds={ dataTestIdsCustomer }
          orderId={ order.orderId }
          status={ order.status }
          date={ order.date }
          price={ order.price }
        />
      ))}
      { user.role === 'seller' && ordersSeller.map((order, index) => (
        <OrderItem
          key={ index }
          testIds={ dataTestIdsSeller }
          orderId={ order.orderId }
          status={ order.status }
          date={ order.date }
          price={ order.price }
          address={ order.address }
          addressNumber={ order.addressNumber }
          role={ user.role }
        />
      ))} */}
    </main>
  );
}

export default Orders;
