import PopupMenu from "../PopupMenu";
import { Link } from "react-router-dom";
import CollcatLogo from "../../assets/icons/Collcat-logo.png";

export default function MobileHeader({ database }) {
  return (
    <nav className="fixed h-screen w-screen backdrop-blur-md bg-primary-500/60 right-0 top-0 z-[5000] p-4">
      <img src={CollcatLogo} className="w-24 aspect-square" alt="CollcatLogo" />

      <hr className="border w-[98%] mx-auto mt-3 mb-8 opacity-45" />

      <div className="flex flex-col gap-2 text-white px-4 text-2xl font-bold">
        <Link to="/" className="hover:cursor-pointer hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:cursor-pointer hover:text-gray-300">
          About Us
        </Link>

        <PopupMenu text="Services" itemList={database} />

        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
