import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import Card from '../components/AllCards';
import generateName from '../services/utils';

function Home() {
  const { setAllPictures, setNames, listProducts,
    setDescribe, describe
  } = useContext(Context);
  // const [meaning, setMeaning] = useState([]);

  useEffect(() => {
    if(listProducts.length === 0) {
      setAllPictures([]);
      for(let index = 0; index < 10; index += 1) {
        fetch('https://picsum.photos/200')
          .then((response) => {
            return setAllPictures((oldPictures) => [...oldPictures, response.url]);
          })
          .catch(function(err) { console.log('Fetch Error', err) });
        }
        setNames(generateName());
    }
  }, []);

  useEffect(() => {
    if (describe.length === 0) {
      for(let index = 0; index < listProducts.length; index += 1) {
        // console.log(describe);
        setDescribe([]);
        const word = listProducts[index].id;
        const URL = `https://significado.herokuapp.com/v2/${word}`

        fetch(URL)
          .then(response => response.json())
          .then(response => {
            // console.log(response);
            return setDescribe((prevSig) => [...prevSig, response]);
          })
          .catch(err => console.error(err));
      };
    }
  },[listProducts.length === 10]);
  
  return(
    <div className='home'>
      <Header />
      <Card />
    </div>
  )
}

export default Home;
