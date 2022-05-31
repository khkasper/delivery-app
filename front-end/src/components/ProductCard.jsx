import PropTypes from 'prop-types';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Image, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import Button from './Button';
import Input from './Input';

function ProductCard({ product, quantity }) {
  const { cart, setCart } = useContext(CustomerContext);

  const updateCart = (newQuantity) => {
    const productExistInCart = cart.find((item) => product.id === item.id);
    if (productExistInCart) {
      const newCart = cart.reduce((acc, item) => {
        if (product.id === item.id) {
          if (newQuantity <= 0) return acc;
          return [...acc, { ...product, quantity: newQuantity }];
        }
        return [...acc, item];
      }, []);
      setCart(newCart);
    } else setCart([...cart, { ...product, quantity: newQuantity }]);
  };

  const addItem = () => {
    updateCart(quantity + 1);
  };

  const subItem = () => {
    updateCart(quantity - 1);
  };

  const handleCountManualChange = ({ target }) => {
    updateCart(Number(target.value));
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      align="center"
      justify="center"
      p={ 2 }
    >
      <Image
        borderRadius="full"
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt={ product.name }
      />
      <Flex direction="column" alignItems="center">
        <span
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </span>
        <span>
          { 'R$ ' }
          <span
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { parseFloat(product.price)
              .toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }
          </span>
        </span>
        <Flex alignItems="center">
          <Button
            icon={ <MinusIcon /> }
            handleClick={ subItem }
            disabled={ quantity <= 0 }
            testId={ `customer_products__button-card-rm-item-${product.id}` }
          />
          <Input
            type="number"
            name="count"
            value={ quantity }
            handleChange={ handleCountManualChange }
            testId={ `customer_products__input-card-quantity-${product.id}` }
            width={ 20 }
            textAlign="center"
          />
          <Button
            icon={ <AddIcon /> }
            handleClick={ addItem }
            testId={ `customer_products__button-card-add-item-${product.id}` }
          />
        </Flex>
      </Flex>
    </Box>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCard;
