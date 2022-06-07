import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import AllCards from '../components/AllCards';
import InputFilter from '../components/Filter/InputFilter';
import FilterName from '../components/Filter/FilterName';
import FilterFavCards from '../components/Filter/FilterFav';

function Home() {
  const {
    createPicturesAndNames,
    createListDescriptions,
    listProducts,
    filterName,
    filterFavorite,
  } = useContext(Context);

  const [picturesAndNames, setPicturesAndNames] = useState({});

  useEffect(() => {
    if(listProducts.length === 0) return  setPicturesAndNames(createPicturesAndNames());
  }, []);

  useEffect(() => { createListDescriptions() }, [picturesAndNames, setPicturesAndNames]);

  return(
    <div className='home_color'>
      <Header />
      <InputFilter />
      { !filterName && filterFavorite === false && (<AllCards />) }
      { filterName && (<FilterName />) }
      { filterFavorite === true && (<FilterFavCards />) }
    </div>
  )
}

export default Home;
