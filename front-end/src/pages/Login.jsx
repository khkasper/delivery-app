import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Flex, Box, FormControl, FormLabel, Stack, Heading,
} from '@chakra-ui/react';
import Button from '../components/Button';
import Input from '../components/Input';
import GlobalContext from '../context/GlobalContext';
import { loginValidate } from '../utils/validation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { loginUser, error, user, HOMES } = useContext(GlobalContext);

  useEffect(() => {
    const result = loginValidate(email, password);
    setDisabled(result);
  }, [email, password]);

  if (user) return <Navigate to={ HOMES[user.role] } />;

  // inspirado por https://chakra-templates.dev/forms/authentication
  const renderEmailInput = () => (
    <FormControl id="email">
      <FormLabel>Email</FormLabel>
      <Input
        testId="common_login__input-email"
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
        testId="common_login__input-password"
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
        testId="common_login__button-login"
        text="LOGIN"
        disabled={ disabled }
        handleClick={ () => loginUser({ email, password }) }
        _hover={ {
          bg: 'blue.500',
        } }
      />
      <Link to="/register">
        <Button
          testId="common_login__button-register"
          text="Ainda não tenho conta"
        />
      </Link>
      {error && (
        <span data-testid="common_login__element-invalid-email">{error.message}</span>
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
            <Heading fontSize="4xl">Entre na sua conta</Heading>
          </Stack>
          <Box
            rounded="lg"
            bg="white"
            boxShadow="lg"
            p={ 8 }
          >
            <Stack spacing={ 4 }>
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

export default Login;
