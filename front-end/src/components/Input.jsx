import PropTypes from 'prop-types';
import React from 'react';

function Input({ testId, type, name, value, handleChange }) {
  return (
    <input
      data-testid={ testId }
      type={ type }
      name={ name }
      value={ value }
      onChange={ handleChange }
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
