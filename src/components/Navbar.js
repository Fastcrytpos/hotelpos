import {Link} from "react-router-dom";
import React from 'react'



const Navbar = () => {
  return (
    /*<div className="/*flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">*/
      <div className="navcontainer">
        <a href="http://www.google.com" className="flex items-center justify-center h-12 w-12 bg-cyan-50 text-cyan-700 rounded-full">
        </a>
        <div className="navtext text-orange-600 ">
          DashBoard
        </div>
        <div className="navtext hover:text-orange-600">
          pizzas
        </div>
        <div className="navtext hover:text-orange-600">
        pasta
        </div>
        <div className="navtext hover:text-orange-600">
        salads
        </div>
        <div className="navtext hover:text-orange-600">
        dessert
        </div>
        <div className="navtext hover:text-orange-600">
        drinks
        </div>
        <div className="navtext hover:text-orange-600">
        sauces
        </div>
        <div className="navtext hover:text-orange-600">
        sides
        </div>
      </div>
  /*  </div>*/
  );
};

export default Navbar;