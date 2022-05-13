import PropTypes from 'prop-types';
import React from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

function Input({ testId, type, name, value, handleChange, width }) {
  return (
    <ChakraInput
      data-testid={ testId }
      type={ type }
      name={ name }
      value={ value }
      onChange={ handleChange }
      width={ width }
      textAlign="center"
      // width="auto"
    />
  );
}

Input.defaultProps = {
  width: undefined,
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.number,
};

export default Input;
