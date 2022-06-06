import React, { useContext,useState, useEffect } from 'react';
import { Context } from '../../context/Provider'
import { DivFilters } from '../../styles/Filters';
import whiteHeart from '../../images/whiteHeart.png';
import redBHeart from '../../images/redBHeart.png'

function InputFilter() {
  const { setFilter, filterFavorite, setFilterFavorite, } = useContext(Context);
  const [color, setColor] = useState(whiteHeart);
  const [clicker, setClick] = useState(false);

  useEffect(() => {
    if (clicker === true) return setColor(redBHeart);
    return setColor(whiteHeart);
  }, [clicker])

  function handleText({ target }) {
    const { value } = target;
    setFilter(value);
  }

  async function handleClick() {
     if(filterFavorite ===  true) {
      await setFilterFavorite(false);

    } else if(filterFavorite ===  false) {
      await setFilterFavorite(true)
    }

    if(clicker === false) return setClick(true);
    return setClick(false);
  }

  return(
    <DivFilters>
      <input
        type='text'
        placeholder='Buscar produto'
        onChange={ handleText}
      />
      <img
        src={ color }
        alt='icone de coração'
        onClick={ () => handleClick() }
      />
    </DivFilters>
  )
}

export default InputFilter;
