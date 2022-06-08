import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Provider'
import ResumeCard from '../ResumeCard';

function FilterName() {
  const { listProducts, filterName, filtredProducts, setFiltredProducts } = useContext(Context);

  useEffect(() => {
    if(filterName !== '') {
      const searched = listProducts.filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()));

      if(searched.length !== 0) { setFiltredProducts(searched)}
    }
  }, [filterName])

  return(
    filtredProducts.length
      && ( <ResumeCard list={ filtredProducts } />)
  )
}

export default FilterName;
