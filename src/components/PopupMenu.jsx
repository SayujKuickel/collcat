import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PopupMenu({
  text,
  itemList,
  handleMobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    handleMobileMenuOpen(false); // Close mobile menu
    setMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <nav
      className="relative group  hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="flex align-bottom justify-center gap-1">
        {text}
        <span
          className={`scale-y-50 text-xl font-bold rotate-[180deg] transition-all ${
            isHovered ? "rotate-[360deg]" : ""
          }`}
        >
          ^
        </span>
      </p>
      <div
        className={`absolute w-64 bg-[#fafafa] shadow-xl top-full left-1/2 -translate-x-1/2 flex flex-col gap-3 px-4 py-2 rounded-md z-[10000] text-black  ${
          isHovered
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-10"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex gap-2 flex-col pt-2">
          {itemList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="hover:text-primary-500"
              onClick={handleClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
