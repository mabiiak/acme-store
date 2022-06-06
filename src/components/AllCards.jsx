import React, { useContext } from 'react';
import { Context } from '../context/Provider'
import ResumeCard from './ResumeCard';

function AllCards() {
  const { listProducts } = useContext(Context);

  return(
    <ResumeCard list={ listProducts } />
  )
}

export default AllCards;
