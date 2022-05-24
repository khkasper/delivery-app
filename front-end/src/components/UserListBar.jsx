import React, { useContext, useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { registerValidate } from '../utils/validation';
import GlobalContext from '../context/GlobalContext';
import AdminContext from '../context/AdminContext';

function UserListBar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [disabled, setDisabled] = useState(true);

  const { error } = useContext(GlobalContext);
  const { registerUserAdmin } = useContext(AdminContext);

  const registerUser = () => {
    registerUserAdmin({ name, email, password, role });
    setName('');
    setEmail('');
    setPassword('');
    setRole('seller');
  };

  useEffect(() => {
    const result = registerValidate(name, email, password);
    setDisabled(result);
  }, [name, email, password]);

  return (
    <div>
      <h2>Cadastrar novo usuário</h2>
      <span>Nome</span>
      <Input
        testId="admin_manage__input-name"
        type="name"
        name="name"
        value={ name }
        handleChange={ (e) => setName(e.target.value) }
      />
      <span>Email</span>
      <Input
        testId="admin_manage__input-email"
        type="email"
        name="email"
        value={ email }
        handleChange={ (e) => setEmail(e.target.value) }
      />
      <span>Senha</span>
      <Input
        testId="admin_manage__input-password"
        type="password"
        name="password"
        value={ password }
        handleChange={ (e) => setPassword(e.target.value) }
      />
      <span htmlFor="admin_manage__select-role">Tipo</span>
      <select
        data-testid="admin_manage__select-role"
        name="role"
        value={ role }
        onChange={ (e) => setRole(e.target.value) }
      >
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
        <option value="administrator">Administrador</option>
      </select>
      <Button
        testId="admin_manage__button-register"
        text="CADASTRAR"
        disabled={ disabled }
        handleClick={ registerUser }
      />
      {error && (
        <span data-testid="admin_manage__element-invalid-register">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default UserListBar;
