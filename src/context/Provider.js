import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [allPictures,setAllPictures] = useState([]);
  const [namesProducts, setNames] = useState([]);
  const [describe, setDescribe] = useState([]);
  let listProducts = [];

  allPictures.map((picture, index) => {
    return listProducts = [
      ...listProducts,
      {
        name: namesProducts[index],
        id: namesProducts[index].split(' ')[0],
        url: picture,
        // price,
        description: describe[index],
      }
    ]
  });

  const allState = {
    allPictures,
    setAllPictures,
    namesProducts,
    setNames,
    listProducts,
    describe,
    setDescribe,
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
