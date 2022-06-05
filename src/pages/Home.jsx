import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import AllCards from '../components/AllCards';
import generateName from '../services/utils';
import Filter from '../components/InputFilter';
import FilterCards from '../components/FilterCards';

function Home() {
  const {
    setAllPictures,
    setNames,
    listProducts,
    setDescribe,
    describe,
    filterName,
  } = useContext(Context);

  useEffect(() => { // gera imagens - gera nome
    if(listProducts.length === 0) {
      setAllPictures([]);
      for(let index = 0; index < 10; index += 1) {
        fetch('https://picsum.photos/200')
          .then((response) => {
            return setAllPictures((oldPictures) => [...oldPictures, response.url]);
          })
          .catch(function(err) { console.log('Fetch Error', err) });
        }
      setNames(generateName());
    }
  }, []);

  useEffect(() => { // gera descrição
    if (describe.length === 0) {
      for(let index = 0; index < listProducts.length; index += 1) {
        setDescribe([]);

        const word = listProducts[index].id;
        const wordRegex = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        // Referencia Regex ---> https://www.horadecodar.com.br/2020/12/07/como-remover-acentos-em-javascript/

        const URL = `https://significado.herokuapp.com/v2/${wordRegex}`

        fetch(URL)
          .then(response => response.json())
          .then(response => {
            return setDescribe((prevSig) => [...prevSig, response]);
          })
          .catch(err => console.error(err));
      };
    }
  },[listProducts.length === 10]);

  return(
    <div className='home_color'>
      <Header />
      <Filter />
      {
        !filterName
        ? (<AllCards />)
        : (<FilterCards />)
      }
    </div>
  )
}

export default Home;
