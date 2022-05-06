import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import CustomerContext from '../context/CustomerContext';
import Button from './Button';
import Input from './Input';

function ProductCard({ product }) {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const { totalPrice, setTotalPrice } = useContext(CustomerContext);

  const addItem = () => {
    setCount(count + 1);
    const newPrice = (parseFloat(totalPrice) + Number(product.price));
    setTotalPrice(newPrice);
  };

  const subItem = () => {
    setCount(count - 1);
    const newPrice = (parseFloat(totalPrice) - Number(product.price));
    setTotalPrice(newPrice);
  };

  const handleCountManualChange = ({ target }) => {
    const oldCount = count;
    setCount(target.value);
    const newCount = target.value;
    const itemPrice = product.price;
    const newPrice = (
      parseFloat(totalPrice) + Number(itemPrice * newCount) - Number(itemPrice * oldCount)
    );
    setTotalPrice(newPrice);
  };

  useEffect(() => {
    if (count <= 0) setDisabled(true);
    else setDisabled(false);
  }, [count]);

  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { `R$ ${product.price}`}

      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ product.name }
        width="200px"
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
            disabled={ disabled }
            testId={ `customer_products__button-card-rm-item-${product.id}` }
          />
          <Input
            type="number"
            name="count"
            value={ count }
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
