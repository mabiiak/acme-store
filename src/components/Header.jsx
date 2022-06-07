import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderOne } from '../styles/Headers';
import whiteCart from '../images/whiteCart.png';

function Header() {
  return(
    <HeaderOne>
      <Link to='/'>
        <h1>ACME</h1>
      </Link>
      <Link to='/cart'>
        <img src={ whiteCart } alt='icon cart' width="55" height="55" />
      </Link>
    </HeaderOne>
  );
}

export default Header;
