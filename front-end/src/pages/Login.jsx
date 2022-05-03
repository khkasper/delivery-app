import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { loginValidate } from '../utils/validation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const result = loginValidate(email, password);
    setDisabled(result);
  }, [email, password]);

  return (
    <main className="containerLoginRegister">
      <h1>Login</h1>
      <span>Email</span>
      <Input
        testId="commom_login__input-email"
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
      />
      <Button
        testId="common_login__button-register"
        text="Ainda não tenho conta"
      />
      <span data-testid="common_login__element-invalid-email"> </span>
    </main>
  );
}

export default Login;
