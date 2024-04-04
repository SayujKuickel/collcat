import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import CollcatLogo from "../assets/icons/Collcat-logo.png";
import CrossIcon from "../assets/icons/cross-nav.svg";
import BarsIcon from "../assets/icons/bars-nav.svg";
import PopupMenu from "./PopupMenu";
import { database } from "../pages";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="relative">
      <div className="container mx-auto flex items-center justify-between relative px-2 md:px-0 ">
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

          <PopupMenu text="Services" itemList={database} />

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

                <PopupMenu text="Services" itemList={database} />

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
