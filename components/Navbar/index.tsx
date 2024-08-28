import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import GetQuoteButton from "./GetQuoteButton";

const Header: React.FC = () => {
  return (
    <header className="overflow-hidden px-20 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <Logo />
        <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap gap-10 w-full text-lg max-md:mt-10 max-md:max-w-full">
            <Navigation />
            <GetQuoteButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
