import { useFormContext } from "../../context/FormContext";

import BlueButton from "../Shared/BlueButton";

import locationIcon from "./../../assets/desktop/icon-location.svg";

const FilterModal = ({ setShowModal, setSearchObject }) => {
  const { userSearch, setUserSearch, isCheckboxChecked, setIsCheckboxChecked } =
    useFormContext();
  const closeModal = (e) => {
    if (e.target.className === "filter-modal__container") {
      setShowModal(false);
    }
  };

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

    setShowModal(false);
  };

  return (
    <div className="filter-modal__container" onClick={closeModal}>
      <form className="filter-modal" onSubmit={handleSubmit}>
        <div className="filter-modal__input-container">
          <img src={locationIcon} alt="" aria-disabled />

          <input
            type="text"
            placeholder="Filter by location..."
            aria-label="Filter by location..."
            name="location"
            value={userSearch.location}
            onChange={handleChange}
          />
        </div>

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

        <BlueButton btnClass="search-btn__filter">Search</BlueButton>
      </form>
    </div>
  );
};

export default FilterModal;
