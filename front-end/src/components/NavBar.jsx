import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import '../css/navBar.css';

function NavBar() {
  const { user } = useContext(GlobalContext);

  return (
    <div className="navBarBody">
      <div className="navBarItems">
        <a href="https://localhost:3000/customer/products" className="active">Produtos</a>
        <a href="https://localhost:3000/customer/orders">Pedidos</a>
      </div>
      <div>
        <div className="navBarUserName">Sair</div>
        <div className="navBarUserName">{ user.name }</div>
      </div>
    </div>
  );
}

export default NavBar;
