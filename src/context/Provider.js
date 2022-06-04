import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [allPictures,setAllPictures] = useState([]);
  const [namesProducts, setNames] = useState([]);

  let listProducts = [];

  allPictures.map((picture, index) => {
    return listProducts = [
      ...listProducts,
      {
        name: namesProducts[index],
        url: picture,
        // price,
        // description,
      }
    ]
  });

  const allState = {
    allPictures,
    setAllPictures,
    namesProducts,
    setNames,
    listProducts,
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
