import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Provider'
import ResumeCard from './ResumeCard';
import getPrice from '../services/calcPrice';

function AllCards() {
  const { listProducts, describe, setPrice, price } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      listProducts.map((item) => {
        const generatePrice = getPrice(item.name, item.description);
        return setPrice((oldValue) => [...oldValue, generatePrice]);
      })
    }, 1)
  }, [listProducts.length === 10]);

  return(
    <ResumeCard list={ listProducts } describe={ describe } prices={ price } />
  )
}

export default AllCards;
