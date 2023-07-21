import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MobileSearchForm from "./Forms/MobileSearchForm";
import DesktopSearchForm from "./Forms/DesktopSearchForm";
import WebsiteCard from "../JobSpecifiationPage/WebsiteCard";

const ModeSwitch = () => {
  return <div className="header__mode-switch__container">Mode</div>;
};

const Header = ({ setShowModal, setSearchObject }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

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

  // Check if the URL ends with "/jobs" or "/jobs/:id"
  const isJobsPage =
    location.pathname.endsWith("/jobs") ||
    location.pathname.match(/\/jobs\/\d+$/);

  return (
    <header>
      <img src="" alt="" className="header__logo" />

      <ModeSwitch />

      {isMobile ? (
        // Render MobileSearchForm if it's the jobs page, else render null (hide it)
        isJobsPage ? (
          <MobileSearchForm
            setShowModal={setShowModal}
            setSearchObject={setSearchObject}
          />
        ) : null
      ) : // Render DesktopSearchForm if it's the jobs page, else render null (hide it)
      isJobsPage ? (
        <DesktopSearchForm setSearchObject={setSearchObject} />
      ) : null}
    </header>
  );
};

export default Header;
