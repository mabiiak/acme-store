import React from "react";
import { Link } from 'react-router-dom';
import { SectionProducts } from "../styles/Card";
import heart from '../images/heart.png';
import cart from '../images/cart.png';

class ResumeCard extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { name, id } = target;

    const selectedItem = this.props.list.find((item) => item.name === id);
    const initialStorage = JSON.parse(localStorage.getItem(name));

    if(initialStorage === null) {
      localStorage.setItem(name, JSON.stringify([{...selectedItem} ]));
    } else {
      localStorage.setItem(name, JSON.stringify([...initialStorage, {...selectedItem}]));
    }
  }

  render() {
    const { list, prices } = this.props;

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
                  list.length === 10 &&
                    <p>
                      R$
                      { prices[index] }
                    </p>
                }
              { console.log(prices) }
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
  }
}

export default ResumeCard;
