import React, { createContext, useState } from 'react';
import getPrice from '../services/calcPrice';
import generateName from '../services/utils';

export const Context = createContext();

function Provider({ children }) {
  const [allPictures,setAllPictures] = useState([]);
  const [namesProducts, setNames] = useState([]);
  const [describe, setDescribe] = useState([]);

  const [filterName, setFilter] = useState('');
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [filtredProducts, setFiltredProducts] = useState([]);

  const [price, setPrice] = useState ([]);

  let listProducts = [];

  function createPicturesAndNames() {
    setAllPictures([]);

    for(let index = 0; index < 10; index += 1) {
      fetch('https://picsum.photos/200').then((response) => {
        return setAllPictures((oldPictures) => [...oldPictures, response.url]);
      }).catch(function(err) { console.log('Fetch Error', err) }); 
    }

    setNames(generateName());
    return namesProducts
  }

  function createListDescriptions() {
    namesProducts.map((name) => {
      let word = name.split(' ')[0];
      if (word === 'Bafômetro' || word === 'Estátua') return word = 'Macarrão';
      const wordRegex = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      // Referencia Regex ---> https://www.horadecodar.com.br/2020/12/07/como-remover-acentos-em-javascript/

      const URL = `https://significado.herokuapp.com/v2/${wordRegex}`  
      return fetch(URL).then(response => response.json())
        .then(response => {
          return setDescribe((prevSig) => [...prevSig, response[0].meanings[0]]);
      }).catch(err => console.error(err));
    });

    return describe;
  }

  function createListPrices() {
    for(let index = 0; index < 10; index +=1) {
      let value = getPrice(namesProducts[index], describe[index]);

      setPrice((oldValues) => [...oldValues, value]);
    }
  }
  
  allPictures.map((picture, index) => {
    return listProducts = [
      ...listProducts,
      
      {
        name: namesProducts[index],
        url: picture,
        id: namesProducts[index].split(' ')[0],
        description: describe[index],
        price: price[index],   
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
    filtredProducts,
    setFiltredProducts,
    price, setPrice,

    createPicturesAndNames,
    createListDescriptions,
    createListPrices,
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
