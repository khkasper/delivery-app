import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrid, Box } from '@chakra-ui/react';
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
    <Box>
      <SimpleGrid columns={ { sm: 2, md: 3 } } spacing={ 10 } p={ 5 }>
        { products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            quantity={ getCartQuantity(product.id) }
          />))}
      </SimpleGrid>
      <Link to="/customer/checkout ">
        <Button
          text="Ver Carrinho: R$&nbsp;"
          disabled={ cart.length === 0 }
          testId="customer_products__button-cart"
          testId2="customer_products__checkout-bottom-value"
          pos={ { name: 'fixed', bottom: 5, right: 5 } }
          value={
            parseFloat(totalPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
          }
        />
      </Link>
    </Box>
  );
}

export default ProductsList;
