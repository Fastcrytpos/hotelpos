import {Link} from "react-router-dom";
import React from 'react'



const Navbar = () => {
  return (
    /*<div className="/*flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">*/
      <div className="sticky top-0 left-0 flex flex-col items-center py-4 flex-shrink-0 h-screen w-20 bg-cyan-500 rounded-3xl">
        <a href="http://www.google.com" className="flex items-center justify-center h-12 w-12 bg-cyan-50 text-cyan-700 rounded-full">
        </a>
        <div className="navtext">
          category
        </div>
        <div className="navtext">
          pizzas
        </div>
        <div className="navtext">
        pasta
        </div>
        <div className="navtext">
        salads
        </div>
        <div className="navtext">
        dessert
        </div>
        <div className="navtext">
        drinks
        </div>
        <div className="navtext">
        sauces
        </div>
        <div className="navtext">
        sides
        </div>
      </div>
  /*  </div>*/
  );
};

export default Navbar;