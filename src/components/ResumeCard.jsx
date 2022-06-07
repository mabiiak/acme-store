import React from "react";
import { Link } from 'react-router-dom';
import { SectionProducts } from "../styles/Card";
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
    let { list, prices, page } = this.props;
    // const { renderList } = this.state;

    return (
      <SectionProducts>
        {
          list.map((item, index) => (
            <div key={ item.name } className='card'>
              <Link
                to={`/product/${item.name.toLowerCase().split(' ').join('_')}`}
              >
                <img src={item.url} alt='imagem do produto'/>
                <div>
                  <h4>{ item.name }</h4>
                  {
                    page === 'fav'
                    ? (<p> R$ { item.price } </p>)
                    : list.length === 10
                    && <p> R$ { prices[index] } </p>
                  }
                </div>
              </Link>
              <div className='buttons'>
                <img
                  src={ heart }
                  alt='heart icon'
                  className='button'
                  name='heart'
                  onClick={ this.handleClick }
                  id={ item.name }
                />
                <img
                  src={ cart }
                  alt='cart icon'
                  className='button'
                  name='cart'
                  onClick={ this.handleClick }
                  id={ item.name }
                />
              </div>
            </div>
          ))
        }
      </SectionProducts>
    )
  };
};

export default ResumeCard;
