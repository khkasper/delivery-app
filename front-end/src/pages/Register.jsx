import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Box, Flex, FormControl, FormLabel, Heading, Image, Stack,
} from '@chakra-ui/react';
import Button from '../components/Button';
import Input from '../components/Input';
import { registerValidate } from '../utils/validation';
import GlobalContext from '../context/GlobalContext';
import tryBiritaLogo from '../images/trybirita-logo.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { registerUser, error, HOMES, user } = useContext(GlobalContext);

  useEffect(() => {
    const result = registerValidate(name, email, password);
    setDisabled(result);
  }, [name, email, password]);

  if (user) return <Navigate to={ HOMES[user.role] } />;

  const renderNameInput = () => (
    <FormControl id="name">
      <FormLabel>Nome</FormLabel>
      <Input
        testId="common_register__input-name"
        type="text"
        name="name"
        value={ name }
        handleChange={ (e) => setName(e.target.value) }
      />
    </FormControl>
  );
  const renderEmailInput = () => (
    <FormControl id="email">
      <FormLabel>Email</FormLabel>
      <Input
        testId="common_register__input-email"
        type="email"
        name="email"
        value={ email }
        handleChange={ (e) => setEmail(e.target.value) }
      />
    </FormControl>
  );

  const renderPasswordInput = () => (
    <FormControl id="password">
      <FormLabel>Senha</FormLabel>
      <Input
        testId="common_register__input-password"
        type="password"
        name="password"
        value={ password }
        handleChange={ (e) => setPassword(e.target.value) }
      />
    </FormControl>
  );

  const renderAnotherFields = () => (
    <Stack spacing={ 10 }>
      <Button
        bg="blue.400"
        color="white"
        testId="common_register__button-register"
        text="CADASTRAR"
        disabled={ disabled }
        handleClick={ () => registerUser({ name, email, password }) }
        _hover={ {
          bg: 'blue.500',
        } }
      />
      <Link to="/login">
        <Button
          minW="100%"
          testId="common_register__button-login"
          text="Já tenho conta"
        />
      </Link>

      {error && (
        <span data-testid="common_register__element-invalid_register">
          {error.message}
        </span>
      )}
    </Stack>
  );
  return (
    <main className="containerLoginRegister">
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="gray.50"
      >
        <Stack spacing={ 8 } mx="auto" maxW="lg" py={ 12 } px={ 6 }>
          <Stack align="center">
            <Heading fontSize="4xl">Cadastre-se no</Heading>
            <Image w="100%" src={ tryBiritaLogo } />
          </Stack>
          <Box
            rounded="lg"
            bg="white"
            boxShadow="lg"
            p={ 8 }
          >
            <Stack spacing={ 4 }>
              { renderNameInput() }
              { renderEmailInput() }
              { renderPasswordInput() }
              { renderAnotherFields() }
            </Stack>
          </Box>
        </Stack>
      </Flex>

    </main>
  );
}

export default Register;
