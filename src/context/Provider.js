import React, { createContext } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const allState = {};

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
