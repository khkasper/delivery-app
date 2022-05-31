import PropTypes from 'prop-types';
import React from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

function Input({ testId, type, name, value, handleChange, width, placeholder }) {
  return (
    <ChakraInput
      data-testid={ testId }
      type={ type }
      name={ name }
      value={ value }
      onChange={ handleChange }
      width={ width }
      placeholder={ placeholder }
      textAlign="center"
      // width="auto"
    />
  );
}

Input.defaultProps = {
  width: undefined,
  placeholder: undefined,
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.number,
  placeholder: PropTypes.string,
};

export default Input;
