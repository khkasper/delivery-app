import React, { useContext, useEffect, useState } from 'react';
import { FormControl, FormLabel, HStack, Select } from '@chakra-ui/react';

import Input from './Input';
import Button from './Button';

import GlobalContext from '../context/GlobalContext';
import { registerValidate } from '../utils/validation';
import AdminContext from '../context/AdminContext';

function AddUserForm() {
  const { error } = useContext(GlobalContext);
  const { registerUserAdmin } = useContext(AdminContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [disabled, setDisabled] = useState(true);

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
    <HStack>
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          testId="admin_manage__input-name"
          type="name"
          name="name"
          value={ name }
          handleChange={ (e) => setName(e.target.value) }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          testId="admin_manage__input-email"
          type="email"
          name="email"
          value={ email }
          handleChange={ (e) => setEmail(e.target.value) }
        />
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="admin_manage__input-password"
        >
          Senha
        </FormLabel>
        <Input
          testId="admin_manage__input-password"
          type="password"
          name="password"
          value={ password }
          handleChange={ (e) => setPassword(e.target.value) }
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="admin_manage__select-role">Tipo</FormLabel>
        <Select
          data-testid="admin_manage__select-role"
          name="role"
          value={ role }
          onChange={ (e) => setRole(e.target.value) }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="admin">Administrador</option>
        </Select>
      </FormControl>
      <Button
        testId="admin_manage__button-register"
        text="CADASTRAR"
        disabled={ disabled }
        handleClick={ registerUser }
        minW="130px"
      />
      {error && (
        <span data-testid="admin_manage__element-invalid-register">
          {error.message}
        </span>
      )}
    </HStack>
  );
}

export default AddUserForm;
