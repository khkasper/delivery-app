import React from 'react';
import axios from 'axios';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { responses, routes } from '../mocks/backend';
import LOGIN_IDS from '../utils/selectors/common/login';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../../App';

const validEmail = 'teste@email.com';
const invalidEmail = 'email inválido';
const validPassword = 'senha ok';
const invalidPassword = '123';

const typeLogin = (email, password) => {
  const emailInput = screen.getByTestId(LOGIN_IDS.input.email);
  const passwordInput = screen.getByTestId(LOGIN_IDS.input.password);

  userEvent.type(emailInput, email);
  userEvent.type(passwordInput, password);
};

const makeLogin = () => {
  typeLogin(validEmail, validPassword);
  const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
  userEvent.click(loginButton);
};

describe('Tela Login', () => {
  let history;

  beforeEach(() => {
    const rendering = renderWithRouter(<App />);
    history = rendering.history;
  });

  describe('Ao renderizar a tela de Login', () => {
    test('Deve ter o campo de email', () => {
      const emailInput = screen.getByTestId(LOGIN_IDS.input.email);
      expect(emailInput).toBeInTheDocument();
    });

    test('Deve ter o campo de senha', () => {
      const passwordInput = screen.getByTestId(LOGIN_IDS.input.password);
      expect(passwordInput).toBeInTheDocument();
    });

    test('Deve ter o botão de login', () => {
      const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
      expect(loginButton).toBeInTheDocument();
    });

    test('Deve ter o botão de cadastro', () => {
      const registerButton = screen.getByTestId(LOGIN_IDS.button.register);
      expect(registerButton).toBeInTheDocument();
    });

    test('A mensagem de erro não deve existir', () => {
      const errorMessage = screen.queryByTestId(LOGIN_IDS.element.invalidEmail);
      expect(errorMessage).not.toBeInTheDocument();
    });

    test('O botão de login deve estar desabilitado', () => {
      const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
      expect(loginButton).toBeDisabled();
    });

    test.todo('Deve ter o logotipo');
  });

  describe('Ao digitar e-mail e senha', () => {
    test('o botão de login continua desabilitado ao digitar e-mail inválido', () => {
      typeLogin(invalidEmail, validPassword);
      const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
      expect(loginButton).toBeDisabled();
    });

    test('o botão de login continua desabilitado ao digitar senha inválida', () => {
      typeLogin(validEmail, invalidPassword);
      const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
      expect(loginButton).toBeDisabled();
    });

    test('o botão de login é habilitado ao digitar dados válidos', () => {
      typeLogin(validEmail, validPassword);
      const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
      expect(loginButton).not.toBeDisabled();
    });
  });

  describe('Ao efetuar login', () => {
    test('mostra mensagem de erro caso os dados sejam inválidos', () => {
      axios.post = jest.fn().mockReturnValue(responses.login.notFound);

      makeLogin();

      const errorMessage = screen.queryByTestId(LOGIN_IDS.element.invalidEmail);
      expect(errorMessage).toBeInTheDocument();
    });

    test('direciona para a tela de produtos caso o login seja de user', () => {
      axios.post = jest.fn().mockReturnValue(responses.login.userOk);

      makeLogin();

      expect(history.location.pathname).toBe(routes.customerHome);
    });

    test('direciona para a tela de admin caso o login seja de admin', () => {
      axios.post = jest.fn().mockReturnValue(responses.login.userOk);

      makeLogin();

      expect(history.location.pathname).toBe(routes.adminHome);
    });

    test('direciona para a tela de orders caso o login seja de seller', () => {
      axios.post = jest.fn().mockReturnValue(responses.login.sellerOk);

      makeLogin();

      expect(history.location.pathname).toBe(routes.sellerHome);
    });
  });
});
