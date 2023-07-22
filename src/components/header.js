import React, { useState } from "react";
import { HeaderDropDown } from "./dropdown";

const Header = () => {
  const [openCommunity, setOpenCommunity] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleJoinFormClick = () => {
    console.log("Bible Studies clicked! Redirect to Bible Studies page...");
  };
  const handleJoinWhatsAppClick = () => {};

  const communityItems = [
    { label: "Join our community", onClick: handleJoinFormClick },
    { label: "Connect on WhatsApp", onClick: handleJoinWhatsAppClick },
  ];

  return (
    <header className="bg-white px-4 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center md:justify-between w-full max-w-screen-2xl mx-auto">
        {/* Hamburger Icon */}
        <button className="lg:hidden mr-4" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Close Icon */}

        {/* Logo */}
        <div className="w-full md:w-auto">
          <img
            src="\Main\PNG\Logo - Main@4x-8.png"
            alt="Logo"
            className="h-auto w-auto max-h-10 md:max-w-full mr-2"
            //   className="h-10 w-10 mr-2 "
          />
        </div>

        {/* Navigation Menu for Mobile */}
        <nav
          className={`lg:hidden h-screen ${
            showMenu ? "block" : "hidden"
          } absolute top-0 left-0 right-0 bg-white z-50 `}
        >
          <div>
            <button
              className={`lg:hidden ${showMenu ? "block" : "hidden"} py-8 px-4`}
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-8 py-8 px-4 font-medium">
              <li className="border-b py-2" onClick={() => {}}>
                <a href="#">Bible Studies</a>
              </li>
              <li className="border-b py-2" onClick={() => {}}>
                <a href="#">Music</a>
              </li>
              <li className="border-b py-2" onClick={() => {}}>
                <a href="#">Outreach</a>
              </li>
              <li className="border-b py-2" onClick={() => {}}>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <button className="bg-[#071E3E] text-white py-2 px-4 rounded w-1/2 mx-4 mt-24">
            Contact Us
          </button>
        </nav>

        {/* Regular Navigation Menu for Larger Screens */}
        <ul className="hidden md:block md:flex space-x-16">
          <li className="text-black hover:text-gray-500">
            <a href="#">Bible Studies</a>
          </li>
          <li className="text-black hover:text-gray-500">
            <a href="#">Music</a>
          </li>
          <li className="text-black hover:text-gray-500">
            <a href="#">Outreach</a>
          </li>

          <HeaderDropDown
            title={"Community"}
            setState={setOpenCommunity}
            state={openCommunity}
            items={communityItems}
          />
        </ul>
        <div className="w-full flex place-content-end md:w-auto">
          <button className="bg-[#071E3E] text-white py-2 px-4 rounded w-fit">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
