import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import GlobalContext from '../context/GlobalContext';

function Orders() {
  const { orders, user } = useContext(GlobalContext);

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

  return (
    <main>
      {user.role === 'customer' && orders.map((order, index) => (
        <OrderItem
          testIds={ dataTestIdsSeller }
          orderId={ order.orderId }
          status={ order.status }
          date={ order.date }
          price={ order.price }
          address={ order.address }
          addressNumber={ order.addressNumber }
          role={ user.role }
          key={ index }
        />
      ))}
      { user.role === 'seller' && orders.map((order, index) => (
        <OrderItem
          testIds={ dataTestIdsCustomer }
          orderId={ order.orderId }
          status={ order.status }
          date={ order.date }
          price={ order.price }
          address={ order.address }
          addressNumber={ order.addressNumber }
          role={ user.role }
          key={ index }
        />
      ))}
    </main>
  );
}

export default Orders;
