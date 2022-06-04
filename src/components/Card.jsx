import React, { useContext } from 'react';
import { Context } from '../context/Provider'
import { SectionProducts } from '../styles/Card'; 
import heart from '../images/heart.png';
import cart from '../images/cart.png';

function Card() {
  const { listProducts } = useContext(Context);
  return(
    <div>
      <SectionProducts>
        { console.log(listProducts)}
      {
        listProducts.map((item) => (
          <div key={ item.name } className='card'>
            <img src={item.url} alt="imagem do produto"/>
            <div>
            <h4>{ item.name }</h4>
              <div>
                <p>R$00,00</p>
                <img src={ heart } alt="heart icon" className='button' onClick={ () => { console.log('Gostei!!!'); } } />
                <img src={ cart } alt="heart icon" className='button' onClick={ () => { console.log('Gostei!!!'); } } />
              </div>
            </div>
          </div>
        ))
      }
      </SectionProducts>
    </div>
  )
}

export default Card;
