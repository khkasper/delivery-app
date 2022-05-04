import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import '../css/navBar.css';
import Button from './Button';

function NavBar({ children }) {
  const { user, handleLogOut } = useContext(GlobalContext);

  return (
    <div className="navBarBody">
      <div>
        { children }
      </div>
      <div className="navBarItems">
        <Button
          className="navBarBtn"
          text="Sair"
          disabled={ false }
          handleClick={ handleLogOut }
          testId="customer_products__element-navbar-link-logout"
        />
        <div
          className="navBarUserName"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
