import React from 'react';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import SuidiImage from './../../assets/saudi-emblem.png';
import { Link } from 'react-router-dom';
import search from  "../../assets/search.svg"
import person from  "../../assets/person.svg"
interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-border-gray p-5 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 hover:bg-light-gray rounded-full"
          >
            {/* <FiMenu className="h-5 w-5" /> */}
          </button>

          {/* <div className="mr-4">
            <img
              src={SuidiImage}
              alt="شعار المملكة العربية السعودية"
              className="h-10"
            />
          </div> */}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-8 pe-2">
            <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:bg-light-gray rounded-full ml-3">
              <img src={search} alt="search" />
            </button>

         
          </div>
        <div className="flex items-center bg-light-gray rounded-full gap-1 ">
        <div >
                <img src={person} alt="user"  />
              </div>
              <Link to="/profile">
                <span className="text-sm font-semibold ">عبدالعزيز محمد</span>
              </Link>
              
            </div>
          <div className="ltr flex items-center ">
            <button className=" text-sm">English</button>
          </div>

        
        </div>
      </div>
    </header>
  );
};

export default Header;
