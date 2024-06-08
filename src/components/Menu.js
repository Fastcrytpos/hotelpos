import React from 'react'
import Navbar from './Navbar'
import Orders from './Orders'

import Itemslist from './itemslist'

function Menu() {
  return (
    <div className="flex ">
      <Navbar  />
      <Itemslist/>
      <Orders />
     
  </div>
  )
}

export default Menu