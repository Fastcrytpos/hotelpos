import React from 'react'
import Order from './Order'



function Orders({orders}) {
  return (
    <div className="orders">
      <div>
        Delivery Adress
        <p>123 Main St</p>
        <p>20 min</p>
      </div>
      <h3>Order Summary</h3>
      <h4><span>Order Id: #81938</span></h4>

      Orders
      <ol>
      {orders.map(order=>< Order order={order}/>)}
      </ol>
      
    </div>
  )
}

export default Orders