import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getJobById } from "../utils/api";

import WebsiteCard from "../components/JobSpecificationPage/WebsiteCard";
import JobRequirements from "../components/JobSpecificationPage/JobRequirements";

const JobSpecification = ({ jobsData }) => {
  const { jobId } = useParams();
  //   const [jobRequirements, setJobRequirements] = useState({});

  //   useEffect(() => {
  //     getJobById(jobId).then((response) => setJobRequirements(response));
  //   }, [jobId]);

  //   console.log(jobRequirements);

  const jobRequirements = jobsData.find((job) => job._id === jobId);

  return (
    <div className="specification-page">
      <section className="specification-section">
        <WebsiteCard
          company={jobRequirements.company}
          website={jobRequirements.website}
        />

        <JobRequirements requirements={jobRequirements} />
      </section>
    </div>
  );
};

export default JobSpecification;
