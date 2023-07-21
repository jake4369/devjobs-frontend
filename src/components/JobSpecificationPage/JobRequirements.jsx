import ovalIcon from "./../../assets/Oval.png";

import BlueButton from "../Shared/BlueButton";

const JobRequirements = ({ requirements }) => {
  const requirementsListItems = requirements.requirements.items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  const requirementsRoleItems = requirements.role.items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div className="job-requirements">
      <div className="job-requirements__flex-container">
        <div>
          <div className="job-requirements__info-container">
            <span className="job-requirements__posted-at">
              {requirements.postedAt}
            </span>
            <img src={ovalIcon} alt="" className="oval-icon" aria-disabled />
            <span className="job-requirements__contract">
              {requirements.contract}
            </span>
          </div>
          <h2 className="job-requirements__company-name">
            {requirements.company}
          </h2>

          <span className="job-requirements__location">
            {requirements.location}
          </span>
        </div>

        <BlueButton btnClass="job-requirements__apply-btn">
          Apply Now
        </BlueButton>
      </div>

      <p className="job-requirements__description">
        {requirements.description}
      </p>

      <h3 className="job-requirements__requirements-heading">Requirements</h3>

      <p className="job-requirements__requirements">
        {requirements.requirements.content}
      </p>

      <ul className="job-requirements__requirements-list">
        {requirementsListItems}
      </ul>

      <h3 className="job-requirements__todo-heading">What You Will Do</h3>

      <p className="job-requirements__role">{requirements.role.content}</p>

      <ol className="job-requirements__role-list">{requirementsRoleItems}</ol>
    </div>
  );
};

export default JobRequirements;
