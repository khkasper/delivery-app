import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../utils/renderWithRouter';

import CHECKOUT_IDS from '../utils/selectors/common/checkout';
import Checkout from '../../pages/Checkout';

describe('Tela Checkout', () => {
  let history;

  beforeEach(() => {
    const rendering = renderWithRouter(<Checkout />);
    history = rendering.history;
    global.localStorage = {
      getItem: () => {},
      setItem: () => {},
    };
  });

  describe.only('Ao renderizar a tela de Checkout', () => {
    test('Deve ter a tabela de produtos vazia', async () => {
      const cartItem = await screen
        .queryByTestId(CHECKOUT_IDS.element.orderTable.itemNumber + '0');
      expect(cartItem).not.toBeInTheDocument();
    });

    test('Deve ter os campos de detalhes de checkout', () => {
      screen.getByTestId(CHECKOUT_IDS.select.orderSeller);
      screen.getByTestId(CHECKOUT_IDS.input.address);
      screen.getByTestId(CHECKOUT_IDS.input.addressNumber);
      screen.getByTestId(CHECKOUT_IDS.button.submitOrder.default);
    });
  });
});

