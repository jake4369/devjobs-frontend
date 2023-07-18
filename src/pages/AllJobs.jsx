import FilterModal from "../components/AllJobsPage/FilterModal";

const AllJobs = ({ showModal, setShowModal }) => {
  return (
    <div className="all-jobs-page">
      <p>All Jobs</p>

      {showModal && <FilterModal setShowModal={setShowModal} />}
    </div>
  );
};

export default AllJobs;
