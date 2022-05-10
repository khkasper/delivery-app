import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import GlobalContext from '../context/GlobalContext';
import ProductCard from './ProductCard';
import Button from './Button';

function ProductsList() {
  const [disabled, setDisabled] = useState(true);
  const { products } = useContext(GlobalContext);
  const { totalPrice } = useContext(CustomerContext);

  useEffect(() => {
    if (totalPrice !== '0.00') setDisabled(false);
    else setDisabled(true);
  }, [totalPrice]);

  return (
    <div>
      { products.map((product) => <ProductCard key={ product.id } product={ product } />)}
      <Link to="/customer/checkout ">
        <Button
          text="Ver Carrinho: R$ "
          disabled={ disabled }
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
