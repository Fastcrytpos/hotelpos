import React from 'react'

function Order({order}) {
  return (
    <li>
      <img src={order.image} alt="icon" className='w-8 h-8 bg-none border-none p-0 m-0 flex inline'/>
      <span className='flex'>{order.name}</span>
      <span className='flex'>{order.price}</span>
      
    </li>
  )
}

export default Order