import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import Card from '../components/Card';
import generateName from '../services/utils';

function Home() {
  const { setAllPictures, setNames, listProducts } = useContext(Context);
  
  useEffect(() => {
    if(listProducts.length === 0) {
      setAllPictures([]);
      for(let index = 0; index < 10; index += 1) {
        fetch('https://picsum.photos/200')
          .then(function(response) {
            return setAllPictures((oldPictures) => [...oldPictures, response.url])
          })
          .catch(function(err) { console.log('Fetch Error', err) });
      }
      setNames(generateName());
  }
  }, []);
  
  return(
    <div className='home'>
      <Header />
      <Card />
    </div>
  )
}

export default Home;
