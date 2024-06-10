import React from 'react'
import Navbar from './Navbar'
import Orders from './Orders'
import { useState } from'react'

import Itemslist from './itemslist'

function Menu() {
  const [orders,setOrders]=useState([])

  function handleclick(food) {
    setOrders(prevOrders => {
        if (Array.isArray(prevOrders)) {
            return [...prevOrders, food];
        } else {
            return [food];
        }
    });
    console.log(food);
}


  return (
    <div className="flex">
      <Navbar  />
      <Itemslist handleclick={handleclick}/>
      <Orders orders={orders} />
     
  </div>
  )
}

export default Menu