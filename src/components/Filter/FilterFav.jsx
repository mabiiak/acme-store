import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../context/Provider';
import { getLocalStorage } from '../../services/localStorage';
import { Title } from '../../styles/Headers';
import ResumeCard from '../ResumeCard';

function FilterFavCards() {
  const { price } = useContext(Context);
  const [researched, setSearch] = useState([]);

  useEffect(() => {
    const searched = getLocalStorage('heart');
    setSearch(searched)
  }, [])

  
  return(
    <div>
      <Title>
        <h3>
          Favoritos
        </h3>
      </Title>
      {
        researched !== null
      ? <ResumeCard list={ researched } page='fav' />
      : <p>Não há favoritos</p>}
    </div>
  )
}

export default FilterFavCards;
