import React, { useContext } from 'react';
import { Context } from '../context/Provider'
import { Link } from 'react-router-dom';
import { SectionProducts } from '../styles/Card'; 
import heart from '../images/heart.png';
import cart from '../images/cart.png';

function AllCards() {
  const { listProducts } = useContext(Context);

  function handleClick({ target }) {
    const { name, id } = target;
    const selectedItem = listProducts.find((item) => item.name === id);

    const initialStorage = JSON.parse(localStorage.getItem(name));

    if(initialStorage === null) {
      localStorage.setItem(name, JSON.stringify([{...selectedItem} ]));
    } else {
      localStorage.setItem(name, JSON.stringify([...initialStorage, {...selectedItem}]));
    }
  }

  return(
    <SectionProducts>
    {
      listProducts.map((item) => (
        <div key={ item.name } className='card'
        >
          <Link to={`/product/${item.name.toLowerCase().split(' ').join('_')}`} >
            <img src={item.url} alt='imagem do produto'/>
            <div>
            <h4>{ item.name }</h4>
            <p>R$00,00</p>
            </div>
          </Link>
          <div className='buttons'>
            <img
              src={ heart }
              alt='heart icon'
              className='button'
              name='heart'
              onClick={ handleClick }
              id={ item.name }
            />
            <img
              src={ cart }
              alt='cart icon'
              className='button'
              name='cart'
              onClick={ handleClick }
              id={ item.name }
            />
          </div>
        </div>

      ))
    }
    </SectionProducts>
  )
}

export default AllCards;
