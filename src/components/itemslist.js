import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'

function Itemslist({handleclick,clicked}) {

    const [foods,setFoods]=useState([])
    console.log(`http://localhost:3000/foods/${[clicked]}`)
    
    

    useEffect(()=>{
      axios(`http://localhost:3000/${[clicked]}`)
      .then((res)=>{setFoods(res.data)})
      .catch(err=>console.error(err))
  
    },[clicked])

    
   
    
    


  return (
    <div className='itemlistcontainer'>
    <div className="flex justify-center w-full mt-8 sticky top-0 mb-6">
        <input type="text" placeholder="Search Restaurant, Food, Cuisine or a Dish" class="w-4/5 bg-gray-700 rounded-full py-3 px-6 text-gray-300"/>
        
    </div>
    <div>
        {foods.map(food => <ItemCard handleclick={handleclick} food={food} />)}
    </div>
</div>

  )
}

export default Itemslist