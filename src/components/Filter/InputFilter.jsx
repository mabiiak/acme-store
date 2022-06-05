import React, { useContext } from 'react';
import { Context } from '../../context/Provider'
import { DivFilters } from '../../styles/Filters';
import whiteHeart from '../../images/whiteHeart.png';

function InputFilter() {
  const { setFilter, filterFavorite, setFilterFavorite, } = useContext(Context);

  function handleText({ target }) {
    const { value } = target;
    setFilter(value);
  }

  async function handleClick() {
    console.log('antes click', filterFavorite);

    if(filterFavorite === '') {
      await setFilterFavorite(true);
      console.log('depois click',filterFavorite);
   
    } else if(filterFavorite ===  true) {
      await setFilterFavorite(false)
      console.log('depois click',filterFavorite);

    } else if(filterFavorite ===  false) {
      await setFilterFavorite(true)
      console.log('depois click',filterFavorite); 
    }

  }

  return(
    <DivFilters>
      <input type='text' placeholder='Buscar produto' onChange={ handleText} />
      <img src={ whiteHeart } alt='icone de coração' onClick={ () => handleClick() } />
    </DivFilters>
  )
}

export default InputFilter;
