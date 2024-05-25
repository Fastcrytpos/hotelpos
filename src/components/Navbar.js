import {Link} from "react-router-dom";
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
        <Link to='/menu' className="menu">Menu</Link>
        </li>
        <li>
        <Link to='/menu' className="menu">Menu</Link>
        </li>
        <li>
        <Link to='/menu' className="logout">Logout</Link>
        </li>
      </ul>
    </div>
  )
   

}

export default Navbar