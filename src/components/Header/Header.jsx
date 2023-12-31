import { useLocation } from "react-router-dom";
import { useIsMobileContext } from "../../context/IsMobile";
import logo from "./../../assets/logos/devjobs.png";

import MobileSearchForm from "./Forms/MobileSearchForm";
import DesktopSearchForm from "./Forms/DesktopSearchForm";

const ModeSwitch = () => {
  return <div className="header__mode-switch__container">Mode</div>;
};

const Header = ({ setShowModal, setSearchObject }) => {
  const { isMobile } = useIsMobileContext();
  const location = useLocation();

  // Check if the URL ends with "/jobs" or "/jobs/:id"
  const isJobsPage =
    location.pathname.endsWith("/jobs") ||
    location.pathname.match(/\/jobs\/\d+$/);

  return (
    <header>
      <img src={logo} alt="" className="header__logo" />

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
