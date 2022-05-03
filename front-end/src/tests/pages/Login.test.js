import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LOGIN_IDS from '../utils/selectors/common/login';
import Login from '../../pages/Login';

const validEmail = 'teste@email.com';
const invalidEmail = 'email inválido';
const validPassword = 'senha ok';
const invalidPassword = '123';

const tryLogin = (email, password) => {
  const emailInput = screen.getByTestId(LOGIN_IDS.input.email);
  const passwordInput = screen.getByTestId(LOGIN_IDS.input.password);
  const loginButton = screen.getByTestId(LOGIN_IDS.button.login);

  userEvent.type(emailInput, email);
  userEvent.type(passwordInput, password);
  userEvent.click(loginButton);
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
  });

  describe('Ao tentar logar da página', () => {
    test('deve mostrar erro ao digitar e-mail inválido', () => {
      tryLogin(invalidEmail, validPassword);
      const errorMessage = screen.getByTestId(LOGIN_IDS.element.invalidEmail);
      expect(errorMessage).toBeVisible();
    });

    test('deve mostrar erro ao digitar senha inválida', () => {
      tryLogin(validEmail, invalidPassword);
      const errorMessage = screen.getByTestId(LOGIN_IDS.element.invalidEmail);
      expect(errorMessage).toBeVisible();
    });

    test('não deve mostrar erro ao digitar dados válidos', () => {
      tryLogin(validEmail, validPassword);
      const errorMessage = screen.getByTestId(LOGIN_IDS.element.invalidEmail);
      expect(errorMessage).not.toBeVisible();
    });
  });
});
