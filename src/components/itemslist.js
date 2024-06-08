import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'

function Itemslist() {

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
    <div>
        <div>
            <input type="text" placeholder='search item here'/>
            <button>Search</button>
        </div>
        <div>
            {foods.map(food => <ItemCard food={food}/>)}
        </div>
        

    
    </div>
  )
}

export default Itemslist