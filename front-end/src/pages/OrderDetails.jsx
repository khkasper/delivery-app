import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import OrderCustomerDetails from '../components/OrderCustomerDetails';
import OrderSellerDetails from '../components/OrderSellerDetails';

function OrderDetails() {
  const { user, getCurrentOrder, setLoading, loading } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const loadCurrentOrder = async () => {
      setLoading(true);
      await getCurrentOrder(id);
      setLoading(false);
    };
    loadCurrentOrder();
  }, [getCurrentOrder, id, setLoading]);

  if (loading) return <div>Carregando</div>;

  return (
    <div>
      { user.role === 'customer' && <OrderCustomerDetails /> }
      { user.role === 'seller' && <OrderSellerDetails /> }
    </div>
  );
}

export default OrderDetails;
