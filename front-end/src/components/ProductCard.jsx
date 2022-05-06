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
    setTotalPrice((newPrice).toFixed(2));
  };

  const subItem = () => {
    setCount(count - 1);
    const newPrice = (parseFloat(totalPrice) - Number(product.price));
    setTotalPrice((newPrice).toFixed(2));
  };

  const handleCountManualChange = ({ target }) => {
    const oldCount = count;
    setCount(target.value);
    const newCount = target.value;
    const itemPrice = product.price;
    const newPrice = (
      parseFloat(totalPrice) + Number(itemPrice * newCount) - Number(itemPrice * oldCount)
    );
    setTotalPrice((newPrice).toFixed(2));
  };

  useEffect(() => {
    if (count === 0) setDisabled(true);
    else setDisabled(false);
  }, [count]);

  return (
    <div>
      <span>{ `R$ ${product.price}`}</span>
      <img src={ product.url_image } alt={ product.name } width="200px" />
      <div>
        <span>{ product.name }</span>
        <div>
          <Button
            text="+"
            handleClick={ addItem }
          />
          <Input
            type="number"
            name="count"
            value={ count }
            handleChange={ handleCountManualChange }
          />
          <Button
            text="-"
            handleClick={ subItem }
            disabled={ disabled }
          />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
