import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import generateName from '../services/utils';

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
          </div>
        ))
      }
    </>
  )
}

export default Home;
