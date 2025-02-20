import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="w-12 h-12 bg-transparent border-none flex flex-col justify-around mr-8 cursor-pointer md:hidden">
        <span className="block w-12 rounded pb-1 h-[2.5px] bg-white"></span>
        <span className="block w-12 rounded pb-1 h-[2.5px] bg-white"></span>
        <span className="block w-12 rounded pt-1 h-[2.5px] bg-white"></span>
      </button>

      <h1 className="text-white text-xl">
        <Link to="/" className="no-underline text-white">
          YourPlaces
        </Link>
      </h1>

      <nav className="text-white hidden md:block">
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
