import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import GlobalContext from '../context/GlobalContext';
import { loginValidate } from '../utils/validation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { loginUser, error, user } = useContext(GlobalContext);

  const HOMES = {
    administrator: '/admin/manage',
    customer: '/customer/products',
    seller: '/seller/orders',
  };

  useEffect(() => {
    const result = loginValidate(email, password);
    setDisabled(result);
  }, [email, password]);

  if (user) return <Navigate to={ HOMES[user.role] } />;

  return (
    <main className="containerLoginRegister">
      <h1>Login</h1>
      <span>Email</span>
      <Input
        testId="common_login__input-email"
        type="email"
        name="email"
        value={ email }
        handleChange={ (e) => setEmail(e.target.value) }
      />
      <span>Password</span>
      <Input
        testId="common_login__input-password"
        type="password"
        name="password"
        value={ password }
        handleChange={ (e) => setPassword(e.target.value) }
      />
      <Button
        testId="common_login__button-login"
        text="LOGIN"
        disabled={ disabled }
        handleClick={ () => loginUser({ email, password }) }
      />
      <Link to="/register">
        <Button
          testId="common_login__button-register"
          text="Ainda não tenho conta"
        />
      </Link>
      { error
        && (<span data-testid="common_login__element-invalid-email">{error.message}</span>
        ) }
    </main>
  );
}

export default Login;
