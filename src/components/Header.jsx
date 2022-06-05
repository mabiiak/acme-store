import React from 'react';
import { Link } from 'react-router-dom';
import whiteCart from '../images/whiteCart.png';
import { HeaderOne } from '../styles/Headers';

function Header() { 
  return(
    <HeaderOne>
      <Link to='/'>
        <h1>ACME</h1>
      </Link>
      <Link to='/cart'>
        <img src={ whiteCart } alt='heart button' name='cart' />
      </Link>
    </HeaderOne>
  )
}

export default Header;
