import React, { useContext } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CHECKOUT_IDS from '../utils/selectors/common/checkout';
import Checkout from '../../pages/Checkout';
import GlobalContext from '../../context/GlobalContext';
import renderWithRouter from '../utils/renderWithRouter';

describe('Tela Checkout', () => {
  beforeEach(() => {
    renderWithRouter(
      <GlobalContext.Provider value={ {
        setLoading: jest.fn(),
        getSellers: jest.fn(),
        loading: false,
        user: {
          "id": 3,
          "name": "Cliente Zé Birita",
          "email": "zebirita@email.com",
          "role": "customer",
          "token": "someNiceToken"
        },
        sellers: [
          {
            "id": 2,
            "name": "Fulana Pereira",
            "email": "fulana@deliveryapp.com",
            "role": "seller"
          }
        ]
      } }>
        <Checkout />
      </GlobalContext.Provider>
    );
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

