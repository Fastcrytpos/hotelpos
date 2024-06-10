import React from 'react'
import Order from './Order'



function Orders({orders}) {
  let subtotal=orders.reduce((total,order)=>total+order.price,0)
  return (
    <div className="orders flex flex-col text-left dis">
      <div className='text-left mt-4 '>
          <h2 class="text-xlcolor-white  ">Order</h2>
          <p>Table 31</p>
          <div className='bg-gray-800 '>
            <h3>Add-On</h3>
          </div>
      </div>

      <h3>Order Summary</h3>
      <h4><span>Order Id: #81938</span></h4>

    
      <div className='overflow-auto w-full  scrollbar-hide'>
      {orders.map(order=>< Order order={order}/>)}
      </div>
      <div >
      <h4>Sub Total <span>${subtotal}</span></h4> 
      <h4>Tax <spam>${subtotal*0.16}</spam></h4>
      <br></br>
      <h4>Total subtotal<span>${subtotal*0.84}</span> </h4>
        <button className='bg-orange-600 mt-8 py-3 px-2 rounded-lg text-center block'>Place Order Mpesa</button>
      </div>
      
    </div>
  )
}

export default Orders