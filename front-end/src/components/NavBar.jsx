import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import '../css/navBar.css';
import Button from './Button';

function NavBar() {
  const { user, handleLogOut } = useContext(GlobalContext);

  return (
    <div className="navBarBody">
      <div className="navBarItems">
        <Link to="/customer/products">
          <p className="active">Produtos</p>
        </Link>
        <Link to="/customer/orders">
          <p className="active">Pedidos</p>
        </Link>
      </div>
      <div className="navBarItems">
        <Button
          className="navBarBtn"
          text="Sair"
          disabled={ false }
          handleClick={ handleLogOut }
        />
        <div className="navBarUserName">{user.name}</div>
      </div>
    </div>
  );
}

export default NavBar;
