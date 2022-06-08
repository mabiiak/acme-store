import React from "react";
import { Link } from 'react-router-dom';
import { ResumeProduct } from "../styles/ResumeProduct";
import heart from '../images/heart.png';
import cart from '../images/cart.png';

class ResumeCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { name, id } = target;
    let { list } = this.props;

    const selectedItem = list.find((item) => item.name === id);
    const initialStorage = JSON.parse(localStorage.getItem(name));
    let checkExist = false;

    if(initialStorage !== null) {
      checkExist = initialStorage.some((item) => item.name === id);
    }
  
    if(initialStorage === null) {
      localStorage.setItem(name, JSON.stringify([{...selectedItem} ]));

    } else if (initialStorage !== null && checkExist === false) {
      localStorage.setItem(name, JSON.stringify([...initialStorage, {...selectedItem}]));

    } else if (initialStorage !== null && checkExist === true) {
      const removeItem = initialStorage.filter((item) => item.name !== id)
      localStorage.setItem(name, JSON.stringify([...removeItem]));
    };
  };

  render() {
    let { list, prices } = this.props;

    return (
      <ResumeProduct>
        { console.log(list) }
        {
          list.map((item, index) => (
            <div key={ item.name } className='card'>
              <Link
                to={`/product/${item.name.toLowerCase().split(' ').join('_')}`}
              >
                <img id='imgProduct' src={item.url} alt='imagem do produto'/>
                <h4>{ item.name }</h4>
              </Link>
                { <p> R$ { prices[index] } </p> }
              <div id="infos">
                <div id='buttons'>
                  <button className='buttonIcon'>
                    <img
                      src={ heart }
                      alt='heart icon'
                      name='heart'
                      onClick={ this.handleClick }
                      id={ item.name }
                      />
                    </button>
                  <button className='buttonIcon'>

                    <img
                      src={ cart }
                      alt='cart icon'
                      name='cart'
                      onClick={ this.handleClick }
                      id={ item.name }
                      />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </ResumeProduct>
    )
  };
};

export default ResumeCard;
