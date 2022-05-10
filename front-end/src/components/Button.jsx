import PropTypes from 'prop-types';
import React from 'react';

function Button({ testId, text, handleClick, disabled, className, value, testId2 }) {
  return (
    <button
      className={ className }
      data-testid={ testId }
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
    >
      { text }
      <span
        data-testid={ testId2 }
      >
        { value }
      </span>
    </button>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
  handleClick: () => {},
  value: '',
  testId2: '',
};

Button.propTypes = {
  handleClick: PropTypes.func,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string,
  testId2: PropTypes.string,
};

export default Button;
