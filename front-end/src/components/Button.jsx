import PropTypes from 'prop-types';
import React from 'react';

function Button({ testId, text, handleClick, disabled, className }) {
  return (
    <button
      className={ className }
      data-testid={ testId }
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
    >
      { text }
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Button;
