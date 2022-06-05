import React, { useContext } from 'react';
import { Context } from '../context/Provider'
import { DivFilters } from '../styles/Filters';
import whiteHeart from '../images/whiteHeart.png';

function InputFilter() {
  const { setFilter } = useContext(Context);

  function handleText({ target }) {
    const { value } = target;
    console.log(value);
    setFilter(value);
  }

  return(
    <DivFilters>
      <input type='text' placeholder='Buscar produto' onChange={ handleText} />
      <img src={ whiteHeart } alt='icone de coração' />
    </DivFilters>
  )
}

export default InputFilter;
