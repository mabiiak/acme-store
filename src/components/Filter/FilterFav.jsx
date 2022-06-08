import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../services/localStorage';
import { Title } from '../../styles/Headers';
import { Link } from 'react-router-dom';
import { ResumeProduct } from "../../styles/ResumeProduct";
import cart  from '../../images/cart.png';
import redHeart from '../../images/redHeart.png';

function FilterFavCards() {
  const [researched, setSearch] = useState([]);

  useEffect(() => {
    const searched = getLocalStorage('heart');
    setSearch(searched)
  }, [])

  function handleClick({ target }) {
    const { name, id } = target;

    const selectedItem = researched.find((item) => item.name === id);
    const initialStorage = JSON.parse(localStorage.getItem(name));
    let checkExist = false;

    if(initialStorage !== null) {
      checkExist = initialStorage.some((item) => item.name === id);
    }
  
    if(initialStorage === null) {
      localStorage.setItem(name, JSON.stringify([{...selectedItem} ]));

    } else if (initialStorage !== null && checkExist === false) {
      localStorage.setItem(name, JSON.stringify([...initialStorage, {...selectedItem}]));

    } else if (name === 'heart' && initialStorage !== null && checkExist === true) {
      const removeItem = initialStorage.filter((item) => item.name !== id)
      localStorage.setItem(name, JSON.stringify([...removeItem]));
      setSearch(removeItem);
    } else if (name === 'cart' && initialStorage !== null && checkExist === true) {
      const removeItem = initialStorage.filter((item) => item.name !== id)
      localStorage.setItem(name, JSON.stringify([...removeItem]));
    }
  };
  
  return(
    <div>
      <Title><h3> Favoritos </h3></Title>
      { console.log(researched) }
      {
        researched.length !== 0
        ? (
          <ResumeProduct>
            {
              researched.map((item, index) => (
                <div key={ item.name } className='card'>
                  <Link
                    to={`/product/${item.name.toLowerCase().split(' ').join('_')}`}
                  >
                    <img src={item.url} alt='imagem do produto'/>
                    <div>
                      <h4>{ item.name }</h4>
                      {
                        researched.length === 10
                        && <p> R$ { researched[index] } </p>
                      }
                    </div>
                  </Link>
                  <div className='buttons'>
                    <img
                      src={ redHeart }
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
              ))
            }
          </ResumeProduct>
          ) : (<p>Não há favoritos</p>)
        }
    </div>
  )
}

export default FilterFavCards;
