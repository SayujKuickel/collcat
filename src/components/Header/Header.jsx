import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { database } from "../../pages";

import CrossIcon from "../../assets/icons/cross-nav.svg";
import BarsIcon from "../../assets/icons/bars-nav.svg";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="relative testing">
      <div className="container mx-auto flex items-center justify-between ">
        <DesktopHeader database={database} />

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
            <MobileHeader mobileMode={true} database={database} />
          )}
        </div>
      </div>
    </header>
  );
}
