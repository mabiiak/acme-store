import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Provider';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Title } from '../styles/Headers';
import heart from '../images/heart.png';
import cart from '../images/cart.png';
import { CardResume } from '../styles/Card';

function ProductDetails() {
  const { id } = useParams()
  const { listProducts, describe } = useContext(Context);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const result = listProducts.filter((product) => {
      return product.name.toLowerCase().split(' ').join('_') === id
    });
    setProduct(result);
  }, []);

  function handleClick({ target }) {
    const { name, id } = target;

    const selectedItem = product.find((item) => item.name === id);
    const initialStorage = JSON.parse(localStorage.getItem(name));

    if(initialStorage === null) {
      localStorage.setItem(name, JSON.stringify([{...selectedItem} ]));
    } else {
      localStorage.setItem(name, JSON.stringify([...initialStorage, {...selectedItem}]));
    }
  }

  return(
    <div className='color'>
      <Header />
        <div>
        {
          product.length !== 0 && describe.length !== 0
          && 
            product.map((item) => (
              <div key={ item.name }>
                <CardResume>
                <img src={item.url} alt='imagem do produto'/>
                <div className='infos'>
                  <h3>{item.name}</h3>
                  {(
                    item.description.length >= 20
                    && item.description.length <= 500)
                    ? (<p>{ item.description }</p>)
                    : (<p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde vero fugiat ipsa. Ab quo vitae nihil sapiente autem ad veniam labore!
                        Perferendis, optio cum. Earum architecto sequi laudantium harum.
                      </p>
                    )
                  }
                  <p>R${ item.price }</p>

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
                </CardResume>
              </div>
            ))
        }
      </div>

    </div>
  )
}

export default ProductDetails;
