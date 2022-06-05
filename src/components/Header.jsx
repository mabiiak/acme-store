import React from 'react';
import { Link } from 'react-router-dom';
import whiteCart from '../images/whiteCart.png';
import { PrincipalHeader } from '../styles/PrincipalHeader';

function Header() { 
  return(
    <PrincipalHeader>
      <h1>ACME</h1>
      <Link to='/cart'>
        <img src={ whiteCart } alt='heart button' name='cart' />
      </Link>
    </PrincipalHeader>
  )
}

export default Header;
