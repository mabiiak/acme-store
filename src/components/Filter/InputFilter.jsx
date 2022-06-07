import React, { useContext,useState } from 'react';
import { Context } from '../../context/Provider'
import { DivFilters } from '../../styles/Filters';
import { Icon } from '@iconify/react';

function InputFilter() {
  const { setFilter, filterFavorite, setFilterFavorite, } = useContext(Context);
  const [clicker, setClick] = useState(false);
  const [color, setColor] = useState('eva:heart-fill');

  function handleText({ target }) {
    const { value } = target;
    setFilter(value);
  }

  async function handleClick() {
    if(color === 'eva:heart-fill') {
      setColor('eva:heart-outline');
    } else {
      setColor('eva:heart-fill')
    };

    if(filterFavorite ===  true) {
      await setFilterFavorite(false);
    } else if(filterFavorite ===  false) {
      await setFilterFavorite(true);
    };

    if(clicker === false) return setClick(true);
    return setClick(false);
  };

  return(
    <DivFilters>
      <input
        type='text'
        placeholder='Buscar produto'
        onChange={ handleText}
      />

      <Icon
        icon={ color }
        color='white'
        width="60"
        height="60"
        alt='icone de coração'
        id='favorites'
        onClick={ () => handleClick() }
      />
    </DivFilters>
  )
}

export default InputFilter;
