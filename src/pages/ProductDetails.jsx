import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Provider';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function ProductDetails() {
  const { id } = useParams()
  const { listProducts } = useContext(Context);
  const [product, setProduct] = useState([]);
  const [describe, setDescribe] = useState([]);

  useEffect(() => {
    const result = listProducts.filter((product) => {
      return product.name.toLowerCase().split(' ').join('_') === id
    });
    setProduct((prod) => [...prod, result]);
  }, []);

  useEffect(() => {
    if (describe.length === 0) {
      console.log(describe);
      setDescribe([]);
      const word = id.split('_')[0];
      const URL = `https://significado.herokuapp.com/v2/${word}`

      fetch(URL)
        .then(response => response.json())
        .then(response => {
          // console.log(response);
          return setDescribe((prevSig) => [...prevSig, response]);
        })
        .catch(err => console.error(err));
    }
  },[setProduct]);

  return(
    <div>
      <Header />
        <div>
        {
          product.length !== 0
          && 
            product[0].map((item) => (
              <div key={ item.name }>
                <h2>{item.name}</h2>
                <img src={item.url} alt='imagem do produto'/>
                <div>
                {/* <p>R$00,00</p> */}
                {
                  describe.length !== 0
                  && describe[0].map((i) => {
                    return (i.meanings[0].length >= 20 && i.meanings[0].length <= 500)
                    ? (<p>{ i.meanings }</p>)
                    : (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde vero fugiat ipsa. Ab quo vitae nihil sapiente autem ad veniam labore!
                        Perferendis, optio cum. Earum architecto sequi laudantium harum.
                      </p>
                    )
                  })
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
