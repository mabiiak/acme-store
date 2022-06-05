import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [allPictures,setAllPictures] = useState([]);
  const [namesProducts, setNames] = useState([]);
  const [describe, setDescribe] = useState([]);

  const [filterName, setFilter] = useState('');
  const [filterFavorite, setFilterFavorite] = useState(false);

  let listProducts = [];

  allPictures.map((picture, index) => {
    return listProducts = [
      ...listProducts,
      
      {
        name: namesProducts[index],
        url: picture,
        id: namesProducts[index].split(' ')[0],
        description: describe[index],
        // price: getPrice(namesProducts[index], describe[index])      
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
    filterName,
    setFilter,
    filterFavorite,
    setFilterFavorite,
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
