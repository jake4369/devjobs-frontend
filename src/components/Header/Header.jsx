import logo from "./../../assets/logos/devjobs.png";
import { useEffect, useState } from "react";

import MobileSearchForm from "./Forms/MobileSearchForm";
import DesktopSearchForm from "./Forms/DesktopSearchForm";

const ModeSwitch = () => {
  return <div className="header__mode-switch__container">Mode</div>;
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isJobsPage, setIsJobsPage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkJobsPage = () => {
      setIsJobsPage(window.location.pathname.endsWith("/jobs"));
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Check if URL ends with "/jobs" on component mount
    checkJobsPage();

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

      {isJobsPage && (isMobile ? <MobileSearchForm /> : <DesktopSearchForm />)}
    </header>
  );
};

export default Header;
