import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, name, testId }) {
  return (
    <NavLink
      to={ to }
      className={
        (navData) => (navData.isActive ? 'linkNavBar linkNavBarActive' : 'linkNavBar')
      }
    >
      <span data-testid={ testId }>{ name }</span>
    </NavLink>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default NavItem;
