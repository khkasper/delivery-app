import React from 'react';
import './App.css';
import Router from './Routes';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}

export default App;
