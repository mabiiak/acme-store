import React, { Component } from "react";

class RenderList extends Component {
  render() {
    const { listProds } = this.props;
    return(
      <div className='color'>
        <Header />
          <div>
          {
            // product.length !== 0 && describe.length !== 0
            listProds.map((item) => (
              <div key={ item.name }>
                <CardResume>
                  <div id='card'>
                    <img src={item.url} alt='imagem do produto'/>
                    <div className='infos'>
                      <h3>{ item.name }</h3>
                      {
                        (item.description.length >= 20 && item.description.length <= 500)
                          ? (<p>{ item.description }</p>)
                          : (<p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam unde vero fugiat ipsa. Ab quo vitae nihil sapiente autem ad veniam labore!
                            Perferendis, optio cum. Earum architecto sequi laudantium harum.
                          </p>
                        )
                      }
                      <p id='price'>R${ item.price }</p>
                        <div id='buttons'>
                          <img
                            src={ heart }
                            alt='heart icon'
                            className='buttonIcon'
                            name='heart'
                            onClick={ handleClick }
                            id={ item.name }
                            />
                          <img
                            src={ cart }
                            alt='cart icon'
                            className='buttonIcon'
                            name='cart'
                            onClick={ handleClick }
                            id={ item.name }
                            />
                        </div>
                      </div>
                    </div>
                </CardResume>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listProds: state.list.state
})

export default connect(mapStateToProps, null)(RenderList) ;
