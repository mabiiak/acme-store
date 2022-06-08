import React from "react";
import { Link } from 'react-router-dom';
import { ResumeProduct } from "../styles/ResumeProduct";
import heart from '../images/heart.png';
import cart from '../images/cart.png';
import redHeart from '../images/redHeart.png'
import redCart from '../images/redCart.png';

class ResumeCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', ({target}) => {
      if(target.alt === 'heart icon') {
        target.src = redHeart;
      };

      if(target.alt === 'cart icon') {
        target.src = redCart;
      };
    });
  };

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
        {
          list.map((item, index) => (
            <div key={ item.name } className='card'>
              <Link
                to={`/product/${item.name.toLowerCase().split(' ').join('_')}`}
              >
                <img src={item.url} alt='imagem do produto'/>
                <h4>{ item.name }</h4>
              </Link>
              <div id="infos">
                { <p> R$ { prices[index] } </p> }
                <div id='buttons'>
                  <img
                    src={ heart }
                    alt='heart icon'
                    name='heart'
                    onClick={ this.handleClick }
                    id={ item.name }
                  />
                  <img
                    src={ cart }
                    alt='cart icon'
                    name='cart'
                    onClick={ this.handleClick }
                    id={ item.name }
                  />
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
