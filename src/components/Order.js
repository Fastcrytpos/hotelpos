import React from 'react'

function Order({order}) {
  return (
    <div className='flex bg-gray-500 border border-gray-400 rounded p-1 mb-1'>
      <img src={order.image} alt="icon" className='w-12 h-12 rounded-full mr-4' />
      <div className='flex-1'>
        <div className='flex flex-col justify-between'>
          <h4 className=' m-0 flex flex-start '>{order.name}</h4>
          <p className='m-0 p-0 font-semibold flex justify-end'>${order.price}</p>
        </div>
        <div className='text-gray-600'>{order.description}</div>
      </div>
    </div>
  )
}

export default Order