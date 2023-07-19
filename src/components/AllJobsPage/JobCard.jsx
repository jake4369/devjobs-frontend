import ovalIcon from "./../../assets/Oval.png";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src="" alt="" />

      <div className="job-card__info-container">
        <span className="job-card__posted-at">{job.postedAt}</span>
        <img src={ovalIcon} alt="" className="oval-icon" aria-disabled />
        <span className="job-card__contract">{job.contract}</span>
      </div>

      <h2 className="job-card__position">{job.position}</h2>

      <p className="job-card__company-name">{job.company}</p>

      <p className="job-card__location">{job.location}</p>
    </div>
  );
};

export default JobCard;
