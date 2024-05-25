import React from 'react'
import mashedpoatato from "../Images/mashedpoatato.jpg"
import "./style.css";

function ItemCard() {
  return (
        <div className='card'>
          <img src={mashedpoatato} alt="hello"></img>
          <h3>mashedpoatato</h3>
          <p>$5.48</p>
        </div>
  )
}

export default ItemCard