import React from 'react';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import SuidiImage from './../../assets/saudi-emblem.png';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-border-gray p-3 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 hover:bg-light-gray rounded-full"
          >
            <FiMenu className="h-5 w-5" />
          </button>

          <div className="mr-4">
            <img
              src={SuidiImage}
              alt="شعار المملكة العربية السعودية"
              className="h-10"
            />
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center">
          <div className="ltr flex items-center mx-3">
            <button className="py-1 px-3 text-sm border-r border-gray-300">English</button>
            <button className="py-1 px-3 text-sm font-bold">العربية</button>
          </div>

          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:bg-light-gray rounded-full ml-3">
              <FiSearch className="h-5 w-5" />
            </button>

            <div className="flex items-center bg-light-gray rounded-full px-3 py-1 mr-3">
           <Link to="/profile" >
           <span className="text-sm font-semibold ml-2">عبدالعزيز محمد</span>  </Link> 
              <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center">
                <FiUser className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;