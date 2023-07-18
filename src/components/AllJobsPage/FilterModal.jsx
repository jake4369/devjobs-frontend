import locationIcon from "./../../assets/desktop/icon-location.svg";

const FilterModal = ({ setShowModal }) => {
  const closeModal = (e) => {
    if (e.target.className === "filter-modal__container") {
      setShowModal(false);
    }
  };

  return (
    <div className="filter-modal__container" onClick={closeModal}>
      <form className="filter-modal">
        <div className="filter-modal__input-container">
          <img src={locationIcon} alt="" aria-disabled />

          <input
            type="text"
            placeholder="Filter by location..."
            aria-label="Filter by location..."
          />
        </div>

        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Full Time
        </label>

        <button className="search-btn">Search</button>
      </form>
    </div>
  );
};

export default FilterModal;
