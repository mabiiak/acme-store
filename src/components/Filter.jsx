import React from 'react';
import { DivFilters } from '../styles/Filters';
import whiteHeart from '../images/whiteHeart.png';

function Filter() {
  return(
    <DivFilters>
      <input type='text' placeholder='Buscar produto'/>
      <img src={ whiteHeart } alt='icone de coração' />
    </DivFilters>
  )
}

export default Filter;
