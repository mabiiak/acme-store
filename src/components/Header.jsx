import React from 'react';
import { Link } from 'react-router-dom';
import whiteHeart from '../images/whiteHeart.png';
import whiteCart from '../images/whiteCart.png';
import { PrincipalHeader } from '../styles/PrincipalHeader';

function Header() { 
  return(
    <PrincipalHeader>
      <h1>ACME</h1>
      <div>
        <Link to='/favorite'>
          <img src={ whiteHeart } alt='heart button' name='favorite' />
        </Link>
        <Link to='/cart'>
          <img src={ whiteCart } alt='heart button' name='cart' />
        </Link>
      </div>
    </PrincipalHeader>
  )
}

export default Header;
