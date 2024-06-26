import {Link} from "react-router-dom";
import React from 'react'



const Navbar = ({setClicked}) => {

  
  function handleclick(e) {
    setClicked(e.target.innerText);
  }





  return (
    /*<div className="/*flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">*/
      <div className="navcontainer">
        <a href="http://www.google.com" className="flex items-center justify-center h-12 w-12 bg-cyan-50 text-cyan-700 rounded-full">
        </a>
        <div className="navtext text-orange-600 ">
          DashBoard
        </div>
        <div onClick={e=>handleclick(e)}  className="navtext hover:text-orange-600">
        pizza
        </div>
        <div onClick={e=>handleclick(e)}  className="navtext hover:text-orange-600">
          pasta
        </div>
        <div onClick={handleclick}  className="navtext hover:text-orange-600">
        salads
        </div>
        <div onClick={handleclick}  className="navtext hover:text-orange-600">
        dessert
        </div>
        <div onClick={handleclick}  className="navtext hover:text-orange-600">
        drinks
        </div>
        <div onClick={handleclick}  className="navtext hover:text-orange-600">
        sauces
        </div>
        <div onClick={handleclick} className="navtext hover:text-orange-600">
        sides
        </div>
      </div>
  /*  </div>*/
  );
};

export default Navbar;