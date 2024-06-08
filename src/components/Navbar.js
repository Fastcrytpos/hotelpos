import {Link} from "react-router-dom";
import React from 'react'



const Navbar = () => {
  return (
    <div className="flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">
      <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-cyan-500 rounded-3xl">
        <a href="http://www.google.com" className="flex items-center justify-center h-12 w-12 bg-cyan-50 text-cyan-700 rounded-full">
        </a>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
          category
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
          pizzas
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
        pasta
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
        salads
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
        dessert
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
        drinks
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
        sauces
        </div>
        <div className="h-12 w-12 mt-2 flex items-center justify-center text-cyan-50 rounded-full">
        sides
        </div>
      </div>
    </div>
  );
};

export default Navbar;