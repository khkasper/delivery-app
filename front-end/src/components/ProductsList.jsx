import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import GlobalContext from '../context/GlobalContext';
import ProductCard from './ProductCard';
import Button from './Button';

function ProductsList() {
  const { products } = useContext(GlobalContext);
  const { totalPrice, cart } = useContext(CustomerContext);

  const getCartQuantity = (productId) => {
    const product = cart.find(({ id }) => (id === productId));
    return product ? product.quantity : 0;
  };

  return (
    <div>
      { products.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
          quantity={ getCartQuantity(product.id) }
        />))}
      <Link to="/customer/checkout ">
        <Button
          text="Ver Carrinho: R$ "
          disabled={ cart.length === 0 }
          testId="customer_products__button-cart"
          testId2="customer_products__checkout-bottom-value"
          value={
            parseFloat(totalPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
          }
        />
      </Link>
    </div>
  );
}

export default ProductsList;
