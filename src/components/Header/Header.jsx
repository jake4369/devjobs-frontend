import logo from "./../../assets/logos/devjobs.png";
import { useEffect, useState } from "react";

import MobileSearchForm from "./Forms/MobileSearchForm";
import DesktopSearchForm from "./Forms/DesktopSearchForm";

const ModeSwitch = () => {
  return <div className="header__mode-switch__container">Mode</div>;
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <img src={logo} alt="" className="header__logo" />

      <ModeSwitch />

      {isMobile ? <MobileSearchForm /> : <DesktopSearchForm />}
    </header>
  );
};

export default Header;
