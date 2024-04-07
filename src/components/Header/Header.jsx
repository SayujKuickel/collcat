import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { database } from "../../pages";

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

        <div className="block md:hidden">
          <button
            onClick={() =>
              setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
            }
          >
            <img src={BarsIcon} alt={BarsIcon} className="w-8 aspect-square" />
          </button>

          {mobileMenuOpen && (
            <MobileHeader
              mobileMenuOpen={mobileMenuOpen}
              handleMobileMenuOpen={setMobileMenuOpen}
              mobileMode={true}
              database={database}
            />
          )}
        </div>
      </div>
    </header>
  );
}
