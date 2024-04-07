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
        <p className="hidden lg:block text-2xl font-bold font-serif uppercase">
          COLLCAT
        </p>
      </div>

      <div className="hidden md:flex items-center gap-1 font-sans text-xl font-semibold text-gray-800 ">
        <Link
          to="/"
          className="hover:text-primary-500 px-4 py-2 rounded-md hover:bg-gray-100/50"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-primary-500 px-4 py-2 rounded-md hover:bg-gray-100/50"
        >
          About us
        </Link>

        <span className="hover:text-primary-500 px-4 py-2 rounded-md hover:bg-gray-100/50">
          <PopupMenu text="Services" itemList={database} />
        </span>

        <Link
          to="/projects"
          className="hover:text-primary-500 px-4 py-2 rounded-md hover:bg-gray-100/50"
        >
          Projects
        </Link>
        <Link to="/contact">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </>
  );
}
