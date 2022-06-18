import React, { Component } from "react";
import { Link } from 'react-router-dom';
import getPrice from "../services/calcPrice";
import { connect } from 'react-redux';
import { totalProd } from "../redux/action";

class Project extends Component {
  constructor() {
    super();

    this.generateImage = this.generateImage.bind(this)
    this.generateDescriptions = this.generateDescriptions.bind(this)
    this.generatePrices = this.generatePrices.bind(this)

    this.state = {
      picture: '',
      description: '',
      price: 0,
      list: [],
    }
  };

  generateImage() {
    fetch('https://picsum.photos/200')
      .then((response) => { this.setState({ picture: response.url }) })
      .catch(function(err) { console.log('Fetch Error', err) }
    );
  }

  generateDescriptions() {
    const { name } = this.props;
    let word = name.split(' ')[0];
    if (word === 'Bafômetro' || word === 'Estátua') return word = 'Macarrão';
    const wordRegex = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // Referencia Regex ---> https://www.horadecodar.com.br/2020/12/07/como-remover-acentos-em-javascript/

    const URL = `https://significado.herokuapp.com/v2/${wordRegex}`;
    return fetch(URL).then(response => response.json())
      .then((response) => { this.setState({ description: response[0].meanings[0] })
    }).catch(err => console.error(err));
  }

  generatePrices() {
    const { description } = this.state;
    const { name } = this.props;
    const value = getPrice(name, description);

    this.setState({ price: value })
  }

  componentDidMount() {
    this.generateImage();
    this.generateDescriptions();
    this.generatePrices();
  }

  render() {
    const { picture, price, description } = this.state;
    const { createList, name } = this.props;
    
    (picture !== '' && price !== 0 && description !== '') &&
      createList([name, price, description])

    return (
      <div>
        {
          picture !== ''
          && (
            <div className="card">
              <Link to={`/product/${name.toLowerCase().split(' ').join('_')}`}>
                <img id='imgProduct' src={picture} alt='imagem do produto'/>
                <h4>{ name }</h4>
                <p> R$ { price } </p>
              </Link>
            </div>
          )
        }
      </div>
  )};
}

const mapDispatchToProps = (dispatch) => ({
  createList: (obj) => dispatch(totalProd(obj)),
});

export default connect(null, mapDispatchToProps)(Project) ;
