import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ to, name, testId }) {
  return (
    <Link to={ to } data-testid={ testId } className="linkNavBar">
      <span>{ name }</span>
    </Link>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default NavItem;
