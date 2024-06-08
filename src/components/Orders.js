import React from 'react'
import Order from './Order'



function Orders({orders}) {
  return (
    <div className="orders">
      Orders
      <ol>
      {orders.map(order=>< Order order={order}/>)}
      </ol>
      
    </div>
  )
}

export default Orders