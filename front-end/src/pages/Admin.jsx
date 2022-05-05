import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NavItem from "../components/NavItem";
import Input from "../components/Input";
import Button from '../components/Button';


function Admin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("");
  const [disabled, setDisabled] = useState(true);

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
          testId="common_manage__input-email"
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
        <span>Tipo</span>
        <Input
          testId="admin_manage__select-role"
          type="select"
          name="tipo"
          value={tipo}
          handleChange={(e) => setTipo(e.target.value)}
        />
        <Button
          testId="common_register__button-register"
          text="CADASTRAR"
          disabled={disabled}
          handleClick={() => registerUser({ name, email, password })}
        />
      </div>
    </main>
  );
}

export default Admin;
