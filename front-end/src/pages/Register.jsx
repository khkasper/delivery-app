import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { registerValidate } from '../utils/validation';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const result = registerValidate(name, email, password);
    setDisabled(result);
  }, [name, email, password]);

  return (
    <main className="containerLoginRegister">
      <h1>Register</h1>
      <span>Nome</span>
      <Input
        testId="common_register__input-name"
        type="text"
        name="name"
        value={ name }
        handleChange={ (e) => setName(e.target.value) }
      />
      <span>Email</span>
      <Input
        testId="common_register__input-email"
        type="email"
        name="email"
        value={ email }
        handleChange={ (e) => setEmail(e.target.value) }
      />
      <span>Senha</span>
      <Input
        testId="common_register__input-password"
        type="password"
        name="password"
        value={ password }
        handleChange={ (e) => setPassword(e.target.value) }
      />
      <Button
        testId="common_register__button-register"
        text="CADASTRAR"
        disabled={ disabled }
      />
      <span data-testid="common_register__element-invalid_register"> </span>
    </main>
  );
}

export default Register;
