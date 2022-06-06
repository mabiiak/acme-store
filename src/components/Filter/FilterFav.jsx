import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../services/localStorage';
import ResumeCard from '../ResumeCard';

function FilterFavCards() {
  const [researched, setSearch] = useState([]);

  useEffect(() => {
    const searched = getLocalStorage('heart');
    setSearch(searched)
  }, [])

  return(
    researched !== null
    ? <ResumeCard list={ researched } /> : <p>Não há favoritos</p>
  )
}

export default FilterFavCards;
