import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ProductCart } from '../styles/Card';
import { Title } from '../styles/Headers';
import trashWhite from '../images/cartIcons/trash.png';
// import add from '../images/cartIcons/add.png';
// import subtract from '../images/cartIcons/subtract.png';

function Cart() {
  const [itensCart, setItensCart] = useState([]);
  // const [count, setCount] = useState(1);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('cart'));
    setItensCart(itens);    
  }
  , [])

  function removeItem({ target }) {
    const { name } = target;

    const remove = itensCart.filter((item) => item.name !== name)
    localStorage.setItem('cart', JSON.stringify(remove));

    setItensCart(remove)
  }

  return(
    <div className='color'>
      <Header />
      <Title> <h3> Carrinho </h3>  </Title>
      {
        itensCart.length !== 0
          ?(<div>
            {
              itensCart.map((item) => (
                <ProductCart>
                  <img src={item.url} alt={item.name} />
                  <div id='infos'>
                    <h4>{item.name}</h4>
                    <p>R$ 00,00</p>
                  </div>
                  <div id='buttons'>
                    {/* <img className='button' src={ add } alt="icone trash" />
                    <p>{ count }</p>
                    <img className='button' src={ subtract } alt="icone trash" /> */}
                    <img
                      className='button'
                      src={ trashWhite }
                      alt="icone trash"
                      name={item.name}
                      onClick={ removeItem }
                    />
                  </div>
                </ProductCart>)
              )
            }
            <p>Total</p>
          </div>)
          : <ProductCart>Carrinho vazio</ProductCart>
      }
    </div>
  )
}

export default Cart;
