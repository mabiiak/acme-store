import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ProductCart } from '../styles/Card';

function Cart() {
  const [itensCart, setItensCart] = useState([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('cart'));

    setItensCart(itens);
  }, [])

  return(
    <div className='color'>
      <Header />
      <h3>Carrinho</h3>
      {
        itensCart === true
          ?(<div>
            {itensCart.map((item) => (
              <ProductCart>
                <img src={item.url} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>R$ 00,00</p>
                </div>
              </ProductCart>))
            }
            <p>Total</p>
          </div>)
          : <ProductCart>Carrinho vazio</ProductCart>
      }
    </div>
  )
}

export default Cart;
