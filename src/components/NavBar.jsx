import { useState } from "react";

import Button from "./Button";

// images
import CollcatLogo from "../assets/icons/Collcat-logo.png";
// icons
import { FaBars, FaS } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BsCaretUp } from "react-icons/bs";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="container mx-auto flex items-center justify-between relatve px-2 md:px-0 ">
        <div className="flex items-center">
          <img
            src={CollcatLogo}
            className="w-28 aspect-square "
            alt="Collcat-logo"
          />
          <p className="hidden md:block text-2xl font-bold uppercase">
            COLLCAT
          </p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4 font-sans text-xl font-semibold text-gray-800 ">
          <li className="hover:cursor-pointer hover:text-primary-400">Home</li>
          <li className="hover:cursor-pointer hover:text-primary-400">
            Contact
          </li>
          <li className="hover:cursor-pointer hover:text-primary-400">About</li>
          <li className="hover:cursor-pointer hover:text-primary-400 relative">
            <div
              onClick={() =>
                setServiceMenuOpen((serviceMenuOpen) => !serviceMenuOpen)
              }
            >
              <p className="flex gap-1 items-center">
                <span>Services</span>
                <span
                  className={`${
                    serviceMenuOpen ? " " : "rotate-180 translate-y-1"
                  } translate-y-[2px] transition-all font-bold`}
                >
                  <BsCaretUp />
                </span>
              </p>
            </div>
            {serviceMenuOpen && (
              <ul className="absolute z-[4999] top-full left-1/2 -translate-x-1/2 w-64 bg-[#fafafa] text-base shadow-lg rounded-sm px-4 py-2 cursor-auto mt-4 flex flex-col gap-1 text-neutral-700">
                <li className="hover:text-black cursor-pointer w-fit">Lorem</li>
                <li className="hover:text-black cursor-pointer w-fit">
                  Fugiat
                </li>
                <li className="hover:text-black cursor-pointer w-fit">
                  Aliquid
                </li>
                <li className="hover:text-black cursor-pointer w-fit">
                  Quisea
                </li>
                <li className="hover:text-black cursor-pointer w-fit">
                  Voluptas
                </li>
              </ul>
            )}
          </li>
          <li>
            <Button>Contact Us</Button>
          </li>
        </ul>

        {/* mobile Nav */}
        <div className="block md:hidden">
          <button
            className="text-2xl relative z-[50001]"
            onClick={() =>
              setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
            }
          >
            {mobileMenuOpen ? <RxCross2 /> : <FaBars />}
          </button>
          {mobileMenuOpen && (
            <div className="absolute h-screen w-full backdrop-blur-md bg-primary-500/60 right-0 top-0 z-[5000] grid place-content-center">
              <ul className="text-3xl text-center font-bold font-sans text-slate-300 flex flex-col gap-4">
                <li className="hover:cursor-pointer hover:text-white">Home</li>
                <li className="hover:cursor-pointer hover:text-white">
                  Contact
                </li>
                <li className="hover:cursor-pointer hover:text-white">About</li>
                <li className="hover:cursor-pointer hover:text-white">
                  Services
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
