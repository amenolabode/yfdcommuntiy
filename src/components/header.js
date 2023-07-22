import React from "react";

const Header = () => {
  return (
    <header className="bg-white px-4 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
        <img
          src="\Main\PNG\Logo - Main@4x-8.png"
          alt="Logo"
          className="h-auto w-auto max-h-10 max-w-full mr-2"
        //   className="h-10 w-10 mr-2 "
        />
        <ul className="flex space-x-16">
          <li className="text-black hover:text-gray-500">
            <a href="#">Bible Studies</a>
          </li>
          <li className="text-black hover:text-gray-500">
            <a href="#">Music</a>
          </li>
          <li className="text-black hover:text-gray-500">
            <a href="#">Outreach</a>
          </li>
          <li className="text-black hover:text-gray-500">
            <a href="#">Community</a>
          </li>
        </ul>
        <button className="bg-[#071E3E] text-white py-2 px-4 rounded">
        Contact Us
      </button>
      </div>
      
    </header>
  );
};

export default Header;
