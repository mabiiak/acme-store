import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderOne } from '../styles/Headers';
import { Icon } from '@iconify/react';

function Header() {
  return(
    <HeaderOne>
      <Link to='/'>
        <h1>ACME</h1>
      </Link>
      <Link to='/cart'>
        <Icon icon="mdi:cart-heart" width="50" height="50" />
      </Link>
    </HeaderOne>
  );
}

export default Header;
