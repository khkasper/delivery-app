import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavItem from "../components/NavItem";
import Input from "../components/Input";
import Button from '../components/Button';
import { registerValidate } from '../utils/validation';
import GlobalContext from '../context/GlobalContext';


function Admin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("seller");
  const [disabled, setDisabled] = useState(true);

  const { error } = useContext(GlobalContext);


  useEffect(() => {
    const result = registerValidate(name, email, password);
    setDisabled(result);
  }, [name, email, password]);

  return (
    <main>
      <div>
        <NavBar>
          <NavItem
            to=""
            name="GERENCIAR USUÁRIOS"
            testId="customer_products__element-navbar-link-products"
          />
        </NavBar>
      </div>
      <div>
        <h2>Cadastrar novo usuário</h2>
        <span>Nome</span>
        <Input
          testId="admin_manage__input-name"
          type="name"
          name="name"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <span>Email</span>
        <Input
          testId="admin_manage__input-email"
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <span>Password</span>
        <Input
          testId="admin_manage__input-password"
          type="password"
          name="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <span for="admin_manage__select-role">Tipo</span>
        <select
          testId="admin_manage__select-role"
          name="tipo"
          value={tipo}
          handleChange={(e) => setTipo(e.target.value)}
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <Button
          testId="admin_manage__button-register"
          text="CADASTRAR"
          disabled={disabled}
          handleClick={() => setDisabled(enable)}
        />
        {error
          && (
            <span data-testid="admin_manage__element-invalid-register">
              {error.message}
            </span>
          )}
      </div>
    </main>
  );
}

export default Admin;
