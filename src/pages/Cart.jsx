import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { BaseCart, Total, EmptyCart } from '../styles/Cart';
import { Title } from '../styles/Headers';
import trashWhite from '../images/cardIcons/trash.png';
import { Link } from 'react-router-dom';

function Cart() {
  const [itensCart, setItensCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('cart'));
    setItensCart(itens);
  }, []);

  useEffect(() => {
    itensCart !== null && total === 0
      && itensCart.map((item) => (
        setTotal((oldTotal) => (oldTotal += Number(item.price)))
      ));
  }, [itensCart, setItensCart]);

  function removeItem({ target }) {
    const { name, id } = target;

    const remove = itensCart.filter((item) => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(remove));

    setItensCart(remove);

    setTotal((oldTotal) => (oldTotal -= Number(id)));

    if(itensCart.length === 0) return setTotal(0);
  }

  return(
    <div className='color backgroundCart'>
      <Header />
      <Title> <h3> Carrinho </h3></Title>
      <BaseCart>
      {
        itensCart.length !== 0
          ? (<div>
            {
              itensCart.map((item) => (
                <div id='itensCart'>
                  <img src={item.url} alt={item.name} id='picture' />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <div id='buttonTrash'>
                    <img
                      className='button'
                      src={ trashWhite }
                      alt="icone trash"
                      name={item.name}
                      id={item.price}
                      onClick={ removeItem }
                    />
                  </div>
                </div>
              ))
            }
            <Total id='total'>
              <p> Total: R${ total.toFixed(2) } </p>
              <Link to='/'>
                <button>Continuar comprando</button>
              </Link>
            </Total>
          </div>)
          : <p id='emptyCart'> Carrinho vazio </p>
      }
      </BaseCart>
    </div>
  );
};

export default Cart;
