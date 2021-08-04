import React from 'react';

const GlobalContext = React.createContext({
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: '',
  developer: false,
  update: data => {},
});

export default GlobalContext;
