import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Provider';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function ProductDetails() {
  const { id } = useParams()
  const { listProducts } = useContext(Context);
  const [product, setProduct] = useState([])

  useEffect(() => {
      const result = listProducts.filter((product) => {
        return product.name.toLowerCase().split(' ').join('_') === id
      });
      setProduct((prod) => [...prod, result]);
  }, []);


  return(
    <div>
      <Header />
        <div>
        {
          product.length !== 0
            && product[0].map((item) => (
              <div>
                <h2>{item.name}</h2>
                <img src={item.url} alt='imagem do produto'/>
                <div>
                <p>R$00,00</p>
                {/* <p>{item.description }</p> */}
                </div>
              </div>
            ))
        }
      </div>

    </div>
  )
}

export default ProductDetails;
