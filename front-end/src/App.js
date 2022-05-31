import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Router from './Routes';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <ChakraProvider>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </ChakraProvider>
  );
}

export default App;
