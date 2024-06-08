import React from 'react'
import "./style.css";

function ItemCard({food}) {
  
  return (
        <div className='card'>
          <img src={food.image} alt="hello"></img>
          <h3>{food.name}</h3>
          <p>{food.price}</p>
        </div>
  )
}

export default ItemCard