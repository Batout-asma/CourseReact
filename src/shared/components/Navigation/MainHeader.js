import React from "react";

const MainHeader = (props) => {
  return (
    <header className="w-full h-16 flex items-center fixed top-0 left-0 bg-[#202020] shadow-md px-4 z-10 md:justify-between">
      {props.children}
    </header>
  );
};

export default MainHeader;
