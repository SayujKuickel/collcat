import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PopupMenu({ text, itemList, mobileMode = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className="relative group w-fit hover:cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="flex align-bottom gap-1">
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
        className={`flex flex-col gap-3 px-6 pt-2 pb-4 rounded-md z-[10000] text-white   ${
          isHovered
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-10"
        } md:w-[20rem] md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:bg-[#fafafa] md:text-black md:shadow-xl transition-all duration-500 ease-in-out`}
      >
        <div className="flex gap-2 flex-col pt-2 text-xl font-semibold">
          {itemList.map((item) => (
            <Link key={item.id} to={item.path} className="w-fit">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
