const MobileSearchForm = () => {
  return (
    <form className="search-and-filter__mobile">
      <input type="text" placeholder="Filter by title…" />

      <button
        className="filter-btn"
        aria-label="Click button to see filter menu"
      ></button>

      <button
        className="search-btn"
        aria-label="Click button to search for your chosen job"
      ></button>
    </form>
  );
};

export default MobileSearchForm;