import PopupMenu from "../PopupMenu";
import { Link } from "react-router-dom";
import CollcatLogo from "../../assets/icons/Collcat-logo.png";

import CrossIcon from "../../assets/icons/cross-nav.svg";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MobileHeader({ database, handleMobileMenuOpen }) {
  const header = useRef();

  useGSAP(() => {
    gsap.from(header.current, {
      x: "100%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  });

  return (
    <nav
      ref={header}
      className="fixed h-screen w-screen backdrop-blur-md bg-primary-500/60 right-0 top-0 z-[5000] p-4"
    >
      <div className="flex items-end">
        <img
          src={CollcatLogo}
          className="w-24 aspect-square"
          alt="CollcatLogo"
        />
        <h2 className="font-serif mb-2 text-white text-4xl font-semibold">
          Collcat
        </h2>
      </div>

      <button
        className="absolute right-6 top-8  rounded-full w-10 border-2 border-black brightness-0 invert "
        onClick={() =>
          handleMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
        }
      >
        <img
          src={CrossIcon}
          alt={CrossIcon}
          className=" scale-y-90 m-2 w-auto aspect-square"
        />
      </button>

      <hr className="border w-[98%] mx-auto mt-3 mb-8 opacity-45" />

      <div className="flex flex-col gap-2 text-white px-4 text-2xl font-bold">
        <Link className="w-fit hover:text-gray-100" to="/">
          Home
        </Link>

        <Link className="w-fit hover:text-gray-100" to="/about">
          About Us
        </Link>

        <Link className="w-fit hover:text-gray-100" to="/projects">
          Projects
        </Link>

        <Link className="w-fit hover:text-gray-100" to="/contact">
          Contact Us
        </Link>

        <PopupMenu text="Services" itemList={database} />
      </div>
    </nav>
  );
}
