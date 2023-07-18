const MobileSearchForm = ({ setShowModal }) => {
  const handleFilterButtonClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <form className="search-and-filter__mobile">
      <input type="text" placeholder="Filter by title…" />

      <button
        className="filter-btn"
        aria-label="Click button to see filter menu"
        onClick={handleFilterButtonClick}
      ></button>

      <button
        className="search-btn"
        aria-label="Click button to search for your chosen job"
      ></button>
    </form>
  );
};

export default MobileSearchForm;
