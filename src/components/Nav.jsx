import React from "react";
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {/* Add your logo here */}
            <img
              src={logo} 
              alt="Logo"
              className="h-10 w-10"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-red-500 uppercase">
              Bashundhara Group
            </h1>
            <p className="text-sm italic text-gray-300">
              For the People, for the Country
            </p>
          </div>
        </div>

        {/* Menu Button */}
        <button className="text-red-500 flex flex-col space-y-1">
          <span className="block w-8 h-1 bg-red-500"></span>
          <span className="block w-8 h-1 bg-red-500"></span>
          <span className="block w-8 h-1 bg-red-500"></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
