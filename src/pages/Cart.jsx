import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ProductCart } from '../styles/Card';
import { Title } from '../styles/Headers';
import trashWhite from '../images/cartIcons/trash.png';

function Cart() {
  const [itensCart, setItensCart] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('cart'));
    setItensCart(itens);

    itensCart !== null
      && itensCart.map((item) => (
        setTotal((oldTotal) => (oldTotal += Number(item.price)))
      ))
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
      <Title> <h3> Carrinho </h3></Title>
      {
        itensCart !== null
          ?(<div>
            {
              itensCart.map((item) => (
                <ProductCart>
                  <img src={item.url} alt={item.name} />
                  <div id='infos'>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
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
                      id={item.price}
                      onClick={ removeItem }
                    />
                  </div>
                </ProductCart>)
              )
            }
            <p>
              Total: { total }
              {
                // itensCart !== null
                //   && itensCart.map((item) => (
                //     total += (Number(item.price))
                //   ))
              }

            </p>
          </div>)
          : <ProductCart>Carrinho vazio</ProductCart>
      }
    </div>
  )
}

export default Cart;
