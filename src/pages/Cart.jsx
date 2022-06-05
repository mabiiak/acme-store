import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ProductCart } from '../styles/Card';

function Cart() {
  const [itensCart, setItensCart] = useState([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('cart'));
    console.log(itens.length);
    setItensCart(itens);
  }, [])

  return(
    <div className='color'>
      <Header />
      <h3>Carrinho</h3>
      <div>
        {
          itensCart.length !== 0
            && itensCart.map((item) => (
              <ProductCart>
                <img src={item.url} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>R$ 00,00</p>
                </div>
              </ProductCart>
            ))
        }
      </div>
      <p>Total</p>
    </div>
  )
}

export default Cart;
