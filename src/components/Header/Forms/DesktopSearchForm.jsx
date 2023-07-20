import { useEffect, useState } from "react";

import searchIcon from "./../../../assets/desktop/icon-search.svg";
import locationIcon from "./../../../assets/desktop/icon-location.svg";

const DesktopSearchForm = ({ searchObject, setSearchObject }) => {
  const [isTablet, setIsTablet] = useState(true);
  const [userSearch, setUserSearch] = useState({
    search: "",
    location: "",
    contract: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchObject(userSearch);

    setUserSearch({
      search: "",
      location: "",
      contract: "",
    });
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
          <input type="checkbox" />
          <span className="checkmark"></span>
          Full Time
        </label>

        <button className="search-btn">Search</button>
      </div>
    </form>
  );
};

export default DesktopSearchForm;
