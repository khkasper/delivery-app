import React, { useContext, useState } from 'react';
import CustomerContext from '../context/CustomerContext';
import GlobalContext from '../context/GlobalContext';
import Button from './Button';
import Input from './Input';

function CheckoutDetails() {
  const { sellers } = useContext(GlobalContext);
  const { checkout, setSaleInfo } = useContext(CustomerContext);
  const [sellerSelected, setSellerSelected] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const submitOrder = () => {
    setSaleInfo({ sellerSelected, address, addressNumber });
    checkout();
  };

  return (
    <div>
      <select
        data-testid="customer_checkout__select-seller"
        name="seller"
        value={ sellerSelected }
        onChange={ (e) => setSellerSelected(e.target.value) }
      >
        {sellers.map((seller, index) => (
          <option key={ index } value={ seller.name }>{seller.name}</option>
        ))}
      </select>
      <Input
        testId="customer_checkout__input-address"
        type="text"
        name="address"
        value={ address }
        handleChange={ (e) => setAddress(e.target.value) }
      />
      <Input
        testId="customer_checkout__input-addressNumber"
        type="text"
        name="addressNumber"
        value={ addressNumber }
        handleChange={ (e) => setAddressNumber(e.target.value) }
      />
      <Button
        testId="customer_checkout__button-submit-order"
        text="FINALIZAR PEDIDO"
        handleClick={ submitOrder }
      />
    </div>
  );
}

export default CheckoutDetails;
