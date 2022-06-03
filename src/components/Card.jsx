import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'

function Card() {
  const { randomPic, setRandomPic } = useContext(Context);
  useEffect(() => {
    fetch('https://picsum.photos/200')
      .then(function(response) {
        return setRandomPic(response.url);
      }).catch(function(err) { console.log('Fetch Error', err) });
  }, []);

  return(
    <div>
      <img src={randomPic} alt="teste"/>
      <p>Nome do produto</p>
      <p>Preço</p>
    </div>
  );
}

export default Card;
