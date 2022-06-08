import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../context/Provider';
import { getLocalStorage } from '../../services/localStorage';
import { Title } from '../../styles/Headers';
import { Link } from 'react-router-dom';
import { ResumeProduct, Notfound } from "../../styles/ResumeProduct";
import cart  from '../../images/cart.png';
import heart from '../../images/heart.png';

function FilterFavCards() {
  const { price } = useContext(Context);
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
      <Title><h3> FAVORITOS </h3></Title>
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
                        price.length === 10
                        && <p> R$ { price[index] } </p>
                      }
                    </div>
                  </Link>
                  <div id='infos'>
                    <div id='buttons'>
                      <button className='buttonIcon'>
                        <img
                          src={ heart }
                          alt='heart icon'
                          name='heart'
                          onClick={ handleClick }
                          id={ item.name }
                        />
                      </button>
                      <button className='buttonIcon'>
                        <img
                          src={ cart }
                          alt='cart icon'
                          name='cart'
                          onClick={ handleClick }
                          id={ item.name }
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </ResumeProduct>
          ) : (
            <Notfound>
              <div>
                <p>Não há favoritos</p>
              </div>
            </Notfound>
          )
        }
    </div>
  )
}

export default FilterFavCards;
