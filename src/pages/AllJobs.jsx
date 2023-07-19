import FilterModal from "../components/AllJobsPage/FilterModal";
import JobCard from "../components/AllJobsPage/JobCard";

const AllJobs = ({ showModal, setShowModal, jobsData }) => {
  const jobCards = jobsData.map((job) => {
    return <JobCard key={job.id} job={job} />;
  });

  return (
    <div className="all-jobs-page">
      {showModal && <FilterModal setShowModal={setShowModal} />}
      <section className="job-cards">{jobCards}</section>
    </div>
  );
};

export default AllJobs;
