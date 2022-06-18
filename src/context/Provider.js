import React, { createContext, useState } from 'react';

export const Context = createContext();

function ProviderFunc({ children }) {
  const [filterName, setFilter] = useState('');
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [filtredProducts, setFiltredProducts] = useState([]);

  const allState = {
    filterName,
    setFilter,
    filterFavorite,
    setFilterFavorite,
    filtredProducts,
    setFiltredProducts,
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
};

export default ProviderFunc;
