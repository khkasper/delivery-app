import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import GlobalContext from '../context/GlobalContext';
import ProductCard from './ProductCard';
import Button from './Button';

function ProductsList() {
  const [disabled, setDisabled] = useState(true);
  const { products, getProducts } = useContext(GlobalContext);
  const { totalPrice } = useContext(CustomerContext);

  useEffect(() => {
    if (totalPrice !== '0.00') setDisabled(false);
  }, [totalPrice]);

  if (products.length === 0) getProducts();

  return (
    <div>
      { products.map((product) => <ProductCard key={ product.id } product={ product } />)}
      <Link to="/customer/checkout ">
        <Button
          text={ `Ver Carrinho: 
            ${parseFloat(totalPrice)
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` }
          disabled={ disabled }
          testId="customer_products__button-cart"
        />
      </Link>
    </div>
  );
}

export default ProductsList;
