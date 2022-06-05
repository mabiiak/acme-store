import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Provider';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function ProductDetails() {
  const { id } = useParams()
  const { listProducts, describe } = useContext(Context);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const result = listProducts.filter((product) => {
      return product.name.toLowerCase().split(' ').join('_') === id
    });
    setProduct((prod) => [...prod, result]);
  }, []);

  return(
    <div className='color'>
      <Header />
        <div>
        {
          product.length !== 0 && describe.length !== 0
          && 
            product[0].map((item) => (
              <div key={ item.name }>
                <h2>{item.name}</h2>
                <img src={item.url} alt='imagem do produto'/>
                <div>
                <p>R$00,00</p>
                {(
                  item.description[0].meanings[0].length >= 20
                  && item.description[0].meanings[0].length <= 500)
                  ? (<p>{ item.description[0].meanings }</p>)
                  : (<p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam unde vero fugiat ipsa. Ab quo vitae nihil sapiente autem ad veniam labore!
                      Perferendis, optio cum. Earum architecto sequi laudantium harum.
                    </p>
                  )
                }
                </div>
              </div>
            ))
        }
      </div>

    </div>
  )
}

export default ProductDetails;
