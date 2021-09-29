import React from 'react';

class Card extends React.Component {

  render() {
    return (
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1633/8969/products/300-063_RadiantRiderWaite_5.jpg?v=1500496205" alt="back of a tarot card" className="card-back-img" onClick={this.props.onDeal}/>
      </div>
    )
  }
}

export default Card;
