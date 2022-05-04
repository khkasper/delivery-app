import PropTypes from 'prop-types';
import React from 'react';

function Button({ testId, text, handleClick, disabled }) {
  return (
    <button
      data-testid={ testId }
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
    >
      { text }
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
