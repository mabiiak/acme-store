import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import InputFilter from '../components/Filter/InputFilter';
import Product from '../components/Product';
import { ResumeProduct } from "../styles/ResumeProduct";
import generateName from '../services/utils';

function Home() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames((oldNames) => generateName())
  }, []);

  return(
    <div className='home_color'>
      <Header />
      <InputFilter />

      <ResumeProduct>
        { names.length !== 0 &&
          names.map((name, index) => (<Product key={ index } name={ name }/>))
        }
      </ResumeProduct>
      {/* { !filterName && filterFavorite === false && (<AllCards />) }
      { console.log(filterName) }
      { filterName && (<FilterName />) }
      { filterFavorite === true && (<FilterFavCards />) } */}
    </div>
  );
};

export default Home;
