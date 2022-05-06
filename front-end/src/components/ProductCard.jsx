import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Button from './Button';

function ProductCard({ product }) {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const addItem = () => {
    setCount(count + 1);
  };

  const subItem = () => {
    setCount(count - 1);
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
          <span>{ count }</span>
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
