import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LOGIN_IDS from '../utils/selectors/common/login';
import Login from '../../pages/Login';

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

describe('Tela Login', () => {
  beforeEach(() => render(<Login />));

  describe('Ao renderizar a tela de Login', () => {
    test.todo('Deve ter o logotipo');

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

    test('A mensagem de erro deve estar oculta', () => {
      const errorMessage = screen.queryByTestId(LOGIN_IDS.element.invalidEmail);
      expect(errorMessage).not.toBeVisible();
    });

    test('O botão de login deve estar desabilitado', () => {
      const loginButton = screen.getByTestId(LOGIN_IDS.button.login);
      expect(loginButton).toBeDisabled();
    });
  });

  describe('Ao tentar logar da página', () => {
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
});
