import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [allPictures,setAllPictures] = useState([]);
  const [namesProducts, setNames] = useState([]);

  const allState = {
    allPictures,setAllPictures, namesProducts, setNames
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
