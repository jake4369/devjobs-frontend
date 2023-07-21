import FilterModal from "../components/AllJobsPage/FilterModal";
import JobCard from "../components/AllJobsPage/JobCard";

const AllJobs = ({ showModal, setShowModal, jobsData, setSearchObject }) => {
  const jobCards = jobsData.map((job) => {
    return <JobCard key={job._id} job={job} />;
  });

  return (
    <div className="all-jobs-page">
      {showModal && (
        <FilterModal
          setShowModal={setShowModal}
          setSearchObject={setSearchObject}
        />
      )}
      <section className="job-cards">{jobCards}</section>
    </div>
  );
};

export default AllJobs;
