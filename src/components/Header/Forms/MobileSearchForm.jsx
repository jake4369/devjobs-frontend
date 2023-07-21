import { useFormContext } from "../../../context/FormContext";

import BlueButton from "../../Shared/BlueButton";

const MobileSearchForm = ({ setShowModal, setSearchObject }) => {
  const { userSearch, setUserSearch } = useFormContext();
  const handleFilterButtonClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

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
    <form className="search-and-filter__mobile" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filter by title…"
        name="search"
        value={userSearch.search}
        onChange={handleChange}
      />

      <button
        type="button"
        className="filter-btn__mobile"
        aria-label="Click button to see filter menu"
        onClick={handleFilterButtonClick}
      ></button>

      <BlueButton
        type="submit"
        btnClass="search-btn__mobile"
        ariaLabel="Click button to search for your chosen job"
      ></BlueButton>
    </form>
  );
};

export default MobileSearchForm;
