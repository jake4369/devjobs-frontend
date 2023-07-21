import { useEffect, useState } from "react";
import { useFormContext } from "../../../context/FormContext";

import BlueButton from "../../Shared/BlueButton";

import searchIcon from "./../../../assets/desktop/icon-search.svg";
import locationIcon from "./../../../assets/desktop/icon-location.svg";

const DesktopSearchForm = ({ setSearchObject }) => {
  const { userSearch, setUserSearch, isCheckboxChecked, setIsCheckboxChecked } =
    useFormContext();
  const [isTablet, setIsTablet] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1440);
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

  const handleChange = (e) => {
    setUserSearch((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsCheckboxChecked(isChecked);
    setUserSearch((prevState) => {
      return {
        ...prevState,
        contract: isChecked ? "full time" : "",
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchObject(userSearch);

    setUserSearch({
      search: "",
      location: "",
      contract: "",
    });

    document.querySelector('input[type="checkbox"]').checked = false;
  };

  return (
    <form className="search-and-filter__desktop" onSubmit={handleSubmit}>
      <div className="input-container">
        <img src={searchIcon} alt="" className="search-icon" aria-disabled />

        <input
          type="text"
          placeholder={
            isTablet
              ? "Filter by title..."
              : "Filter by title, companies, expertise…"
          }
          aria-label="Filter by title, companies, expertise…"
          name="search"
          value={userSearch.search}
          onChange={handleChange}
        />
      </div>
      <div className="filter-container">
        <img
          src={locationIcon}
          alt=""
          className="location-icon"
          aria-disabled
        />

        <input
          type="text"
          placeholder="Filter by location..."
          aria-label="Filter by location..."
          name="location"
          value={userSearch.location}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="contract"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
          Full Time
        </label>

        <BlueButton btnClass="search-btn__desktop">Search</BlueButton>
      </div>
    </form>
  );
};

export default DesktopSearchForm;
