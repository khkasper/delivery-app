import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import Button from './Button';
import Input from './Input';

function ProductCard({ product, quantity }) {
  const { cart, setCart } = useContext(CustomerContext);

  const updateCart = (newQuantity) => {
    console.log(typeof newQuantity);
    const productExistInCart = cart.find((item) => product.id === item.id);
    if (productExistInCart) {
      const newCart = cart.reduce((acc, item) => {
        if (product.id === item.id) {
          if (newQuantity <= 0) return acc;
          return [...acc, { ...product, quantity: newQuantity }];
        }
        return [...acc, item];
      }, []);
      console.log(newCart);
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
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { parseFloat(product.price)
          .toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }
      </span>
      <img
        width="200px"
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt={ product.name }
      />
      <div>
        <span
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </span>
        <div>
          <Button
            text="-"
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
          />
          <Button
            text="+"
            handleClick={ addItem }
            testId={ `customer_products__button-card-add-item-${product.id}` }
          />
        </div>
      </div>
    </div>
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
