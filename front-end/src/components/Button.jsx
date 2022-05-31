import PropTypes from 'prop-types';
import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

function Button({
  testId, text, handleClick, disabled, className, value,
  testId2, icon, pos = {}, minW,
}) {
  return (
    <ChakraButton
      colorScheme="teal"
      className={ className }
      data-testid={ testId }
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
      pos={ pos.name }
      bottom={ pos.bottom }
      right={ pos.right }
      minW={ minW }
    >
      { icon }
      { text }
      { value && <span data-testid={ testId2 }>{ value }</span>}
    </ChakraButton>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
  handleClick: () => {},
  value: undefined,
  testId2: undefined,
  text: undefined,
  icon: undefined,
  pos: undefined,
  minW: undefined,
};

Button.propTypes = {
  handleClick: PropTypes.func,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string,
  testId2: PropTypes.string,
  icon: PropTypes.node,
  pos: PropTypes.shape({
    name: PropTypes.string,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),
  minW: PropTypes.string,
};

export default Button;
