import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../context/Provider'
import Header from '../components/Header';
import Card from '../components/AllCards';
import generateName from '../services/utils';

function Home() {
  const { setAllPictures, setNames, listProducts,
    // setDescibe, describe
  } = useContext(Context);
  // const [meaning, setMeaning] = useState([]);

  useEffect(() => {
    if(listProducts.length === 0) {
      setAllPictures([]);
      for(let index = 0; index < 10; index += 1) {
        fetch('https://picsum.photos/200')
          .then(function(response) {
            return setAllPictures((oldPictures) => [...oldPictures, response.url]);
          })
          .catch(function(err) { console.log('Fetch Error', err) });
        }
        setNames(generateName());
    }
  }, []);

//   useEffect(() => {
//     if(listProducts.length === 10) {
//       for(let index = 0; index < 10; index += 1) {
//         setMeaning([]);
//         const word = listProducts[index].id;
//         const URL = `https://significado.herokuapp.com/v2/${word}`

//         fetch(URL)
//           .then(response => response.json())
//           .then(response => {
//             // console.log(word ,response[0]);
//             return setMeaning((prevSig) => [...prevSig, response[0].meanings]);
//           })
//         .catch(err => console.error(err));
//       }
//     }
// },[listProducts]);

//   useEffect(() => {
//     if(meaning.length === 10 ) {
//       setDescibe((old) => [...old, meaning])
//     };
//   }, [])
  
  return(
    <div className='home'>
      <Header />
      <Card />
    </div>
  )
}

export default Home;
