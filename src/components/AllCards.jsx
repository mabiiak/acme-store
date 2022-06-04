import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Provider'
import { SectionProducts } from '../styles/Card'; 
import heart from '../images/heart.png';
import cart from '../images/cart.png';

function Card() {
  const { listProducts } = useContext(Context);

  function handleClick({ target }) {
    const { name } = target;
    console.log(name);
    if(name === 'button') {
      return (
        <Link to='/' />
      )
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
              name='button'
              onClick={ () => { handleClick() } }
            />
            <img
              src={ cart }
              alt='heart icon'
              className='button'
              name='button'
              onClick={ () => { console.log('Gostei!!!'); } }
            />
          </div>
        </div>

      ))
    }
    </SectionProducts>
  )
}

export default Card;
