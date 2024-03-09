import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

// icons
import CollcatLogo from "../assets/icons/Collcat-logo.png";
import CrossIcon from "../assets/icons/cross-nav.svg";
import BarsIcon from "../assets/icons/bars-nav.svg";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="relative">
      <div className="container mx-auto flex items-center justify-between relatve px-2 md:px-0 ">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={CollcatLogo}
              className="w-28 aspect-square "
              alt="Collcat-logo"
            />
          </Link>
          <p className="hidden md:block text-2xl font-bold font-serif uppercase">
            COLLCAT
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 font-sans text-xl font-semibold text-gray-800 ">
          <Link to="/" className="hover:text-primary-500">
            Home
          </Link>

          <Link to="/about" className="hover:text-primary-500">
            About us
          </Link>

          <div
            className="relative group  hover:text-primary-500 hover:cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="flex align-bottom justify-center gap-1">
              Services
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
                <Link
                  to="/service/business-restructuring"
                  className="hover:text-primary-500"
                >
                  Business Restructuring
                </Link>
                <Link
                  to="/service/digital-marketing"
                  className="hover:text-primary-500"
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/service/data-management"
                  className="hover:text-primary-500"
                >
                  Data Management
                </Link>
                <Link to="/service/finance" className="hover:text-primary-500">
                  Finance
                </Link>
                <Link
                  to="/service/hr-management"
                  className="hover:text-primary-500"
                >
                  HR Management
                </Link>
                <Link
                  to="/service/investment"
                  className="hover:text-primary-500"
                >
                  Investment
                </Link>
              </div>
            </div>
          </div>

          <Link className="hover:text-primary-500" to="/projects">
            Projects
          </Link>

          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* mobile Nav */}
        <div className="block md:hidden">
          <button
            className=" relative z-[50001]"
            onClick={() =>
              setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
            }
          >
            {mobileMenuOpen ? (
              <img
                src={CrossIcon}
                alt={CrossIcon}
                className="brightness-0 invert scale-y-90 w-8 aspect-square"
              />
            ) : (
              <img
                src={BarsIcon}
                alt={BarsIcon}
                className="w-8 aspect-square"
              />
            )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute h-screen w-full backdrop-blur-md bg-primary-500/60 right-0 top-0 z-[5000] grid place-content-center">
              <div className="text-xl text-center font-bold font-sans text-slate-300 flex flex-col gap-4">
                <Link
                  to="/"
                  className="hover:cursor-pointer hover:text-gray-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:cursor-pointer hover:text-gray-300"
                >
                  About Us
                </Link>
                <div
                  className="relative group  hover:text-gray-300 hover:cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <p className="flex align-bottom justify-center gap-1">
                    services
                    <span
                      className={`scale-y-50 text-xl font-bold rotate-180  transition-all ${
                        isHovered ? " rotate-0" : ""
                      }`}
                    >
                      ^
                    </span>
                  </p>
                  <div
                    className={`absolute w-64 bg-[#fafafa]  shadow-xl top-full left-1/2 -translate-x-1/2 flex flex-col gap-3 px-4 py-2 rounded-md z-[10000] text-[#222]  ${
                      isHovered
                        ? "block opacity-100 translate-y-0"
                        : "hidden opacity-0 -translate-y-10"
                    } transition-all duration-500 ease-in-out`}
                  >
                    <div className="flex gap-2 flex-col pt-2">
                      <Link
                        to="/service/business-restructuring"
                        className="hover:text-gray-700"
                      >
                        Business Restructuring
                      </Link>
                      <Link
                        to="/service/digital-marketing"
                        className="hover:text-gray-700"
                      >
                        Digital Marketing
                      </Link>
                      <Link
                        to="/service/data-management"
                        className="hover:text-gray-700"
                      >
                        Data Management
                      </Link>
                      <Link
                        to="/service/finance"
                        className="hover:text-gray-700"
                      >
                        Finance
                      </Link>
                      <Link
                        to="/service/hr-management"
                        className="hover:text-gray-700"
                      >
                        HR Management
                      </Link>
                      <Link
                        to="/service/investment"
                        className="hover:text-gray-700"
                      >
                        Investment
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
