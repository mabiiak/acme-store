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
    <ResumeCard list={ researched } />
  )
}

export default FilterFavCards;
