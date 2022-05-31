import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import '../css/navBar.css';

function NavBar({ children }) {
  const { user, handleLogOut, loading } = useContext(GlobalContext);

  if (loading) return <div>Carregando</div>;

  return (
    <div className="navBarBody">
      <div>
        { children }
      </div>
      <div className="navBarItems">
        <button
          type="button"
          className="navBarBtn"
          onClick={ handleLogOut }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
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
