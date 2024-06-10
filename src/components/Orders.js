import React from 'react'
import Order from './Order'



function Orders({orders}) {
  let subtotal=orders.reduce((total,order)=>total+order.price,0)
  return (
    <div className="orders flex flex-col text-left dis ">
      <div className='text-left mt-4 bg-gray-700 w-full mb-4  text-gray-300 text-center'>
          <h3 class="text-xlcolor-white py-5  ">Order Summary</h3>
          <p>Table 31</p>
          <div className='bg-gray-800 '>
            <h3>Add-On</h3>
          </div>
      </div>




    
      <div className='overflow-auto w-full  scrollbar-hide'>
      {orders.map(order=>< Order order={order}/>)}
      </div>
      <div className='inset-x-0.bottom-0 bg-gray-700 rounded py-3 px-6 text-gray-300 justify-centre w-full mt-4' >
        <div className=' flex justify-around '>
          <h4 className=''>Sub Total</h4>
          <span className='' >${subtotal}</span>
        </div>


        <div className=' flex justify-around mt-3'>
          <h4 className='align-left'>Tax</h4>
          <span className='' >${subtotal*0.16}</span>
        </div>
        <br></br>

        <div className=' flex justify-around mt-2'>
          <h4 className='align-left'>Total</h4>
          <span className='' >${subtotal*0.84}</span>
        </div>

          <button className='bg-orange-600 mt-4 py-3 px-2 rounded-lg text-center flex flex- block'>Place Order Mpesa</button>
      </div>
      
    </div>
  )
}

export default Orders