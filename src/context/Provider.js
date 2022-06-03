import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [randomPic, setRandomPic] = useState('');

  const allState = {
    randomPic, setRandomPic
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
