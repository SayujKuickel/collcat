// import PopupMenu from "../PopupMenu";
// import Button from "../Button";

import CollcatLogo from "../../assets/icons/Collcat-logo.png";
import { Link } from "react-router-dom";
import PopupMenu from "../PopupMenu";
import Button from "../Button";

export default function DesktopHeader({ database }) {
  return (
    <>
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
    </>
  );
}
