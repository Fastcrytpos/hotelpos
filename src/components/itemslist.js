import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'

function Itemslist({handleclick}) {

    const [foods,setFoods]=useState([])
    

    useEffect(()=>{
        happy()
    },[])

    function happy(){
    axios("http://localhost:3000/pizza")
    .then(res=>setFoods(res.data))
    .catch(err=>console.error(err))

    }
    


  return (
    <div className='itemlistconatiner'>
        <div class="relative  mt-8 sticky top-0 mb-6">
                <input type="text" placeholder="Search Restaurant, Food, Cuisine or a Dish" class="w-full bg-gray-700 rounded-full py-3 px-6 text-gray-300"/>
                <span class="material-icons absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
        </div>
        <div>
            {foods.map(food => <ItemCard handleclick={handleclick} food={food}/>)}
        </div>
        

    
    </div>
  )
}

export default Itemslist