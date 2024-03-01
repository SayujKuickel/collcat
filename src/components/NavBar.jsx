import { useState } from "react";
import Button from "./Button";

export default function NavBar() {
  const [serviceMenuIsOpen, setServiceMenuIsOpen] = useState(false);

  return (
    <header className=" font-sans relative ">
      {/* <div className="container mx-auto"> */}
      <div className="w-full flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img
            src="./src/assets/icons/Collcat-logo.png"
            className="w-28 aspect-square "
            alt="Collcat-logo"
          />
          <p className="hidden md:block text-2xl font-bold uppercase">
            COLLCAT
          </p>
        </div>

        {/* desktop */}
        <ul className="items-center md:gap-2 gap-4 capitalize hidden md:flex  text-base lg:text-xl">
          <li className="px-2 py-2 ">
            <a href="">Home</a>
          </li>
          <li className="px-2 py-2 ">
            <a href="">About Us</a>
          </li>
          <li
            className="relative px-2 py-2 hover:cursor-pointer "
            onClick={() =>
              setServiceMenuIsOpen((serviceMenuIsOpen) => !serviceMenuIsOpen)
            }
          >
            <p>services</p>
            {serviceMenuIsOpen && (
              <ul className="absolute bg-[#eff3f5] w-[12rem] p-2 shadow-md top-full -left-1/2 mt-2 z-10 flex flex-col text-base	">
                <li className="px-2 py-2 ">Lorem.</li>
                <li className="px-2 py-2 ">Deleniti.</li>
                <li className="px-2 py-2 ">Provident?</li>
                <li className="px-2 py-2 ">Nostrum.</li>
                <li className="px-2 py-2 ">Eaque?</li>
              </ul>
            )}
          </li>
          <li className="px-2 py-2 ">
            <a href="">Projects</a>
          </li>
          <li className="px-2 py-2 ">
            <Button>Contact Us</Button>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </header>
  );
}
