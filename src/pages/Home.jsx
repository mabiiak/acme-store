import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import generateName from '../services/utils';
import heart from '../images/heart.png';
import cart from '../images/cart.png';

function Home() {
  const { allPictures,setAllPictures, namesProducts, setNames } = useContext(Context);
  
  useEffect(() => {
    setAllPictures([]);
    for(let index = 0; index < 10; index += 1) {
      fetch('https://picsum.photos/200')
        .then(function(response) {
          return setAllPictures((oldPictures) => [...oldPictures, response.url])
        })
        .catch(function(err) { console.log('Fetch Error', err) });
    }
    setNames(generateName());
  }, []);
  
  return(
    <>
      <Header />
      {
        allPictures.map((picture, index) => (
          <div key={ index }>
            <img src={picture} alt="imagem do produto"/>
            <p>{ namesProducts[index] }</p>
            <div>
              <p>R$</p>
              <div>
                <img src={ heart } alt="heart icon" onClick={ () => { console.log('Gostei!!!'); } } />
                <img src={ cart } alt="heart icon" onClick={ () => { console.log('Gostei!!!'); } } />
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Home;
