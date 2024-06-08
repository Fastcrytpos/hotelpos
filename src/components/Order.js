import React from 'react'

function Order({order}) {
  return (
    <li>
      {order.name}
      {order.price}
    </li>
  )
}

export default Order