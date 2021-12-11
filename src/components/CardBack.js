import React from 'react';

const CardBack = ({onDeal}) => {

    return (
      <div onClick={onDeal}> 
        <img src="https://cdn.shopify.com/s/files/1/1633/8969/products/300-063_RadiantRiderWaite_5.jpg?v=1500496205" alt="back of a tarot card" className="card-back-img" onClick={onDeal}/>
      </div>
    )
}

export default CardBack;
