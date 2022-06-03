import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import generateName from '../services/utils';
import heart from '../images/heart.png';
import cart from '../images/cart.png';
import { SectionProducts } from '../styles/Card'; 

function Home() {
  const { allPictures, setAllPictures, namesProducts, setNames } = useContext(Context);
  
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
    <div className='home'>
      <Header />
      <SectionProducts>
      {
        allPictures.map((picture, index) => (
          <div key={ index } className='card'>
            <img src={picture} alt="imagem do produto"/>
            <div>
            <h4>{ namesProducts[index] }</h4>
              <div>
                <p>R$00,00</p>
                <img src={ heart } alt="heart icon" className='button' onClick={ () => { console.log('Gostei!!!'); } } />
                <img src={ cart } alt="heart icon" className='button' onClick={ () => { console.log('Gostei!!!'); } } />
              </div>
            </div>
          </div>
        ))
      }
      </SectionProducts>
    </div>
  )
}

export default Home;
