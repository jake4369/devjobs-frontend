import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login";
import AllJobs from "./pages/AllJobs";
import JobSpecification from "./pages/JobSpecification";

import { getAllJobs } from "./utils/api.js";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobsData, setJobsData] = useState([]);
  const [searchObject, setSearchObject] = useState({
    search: "",
    location: "",
    contract: "",
  });

  useEffect(() => {
    getAllJobs(searchObject).then((response) => setJobsData(response));
  }, [searchObject]);

  return (
    <main>
      <Header setShowModal={setShowModal} setSearchObject={setSearchObject} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/jobs"
          element={
            <AllJobs
              showModal={showModal}
              setShowModal={setShowModal}
              jobsData={jobsData}
              setSearchObject={setSearchObject}
            />
          }
        />
        <Route
          path="/jobs/:jobId"
          element={<JobSpecification jobsData={jobsData} />}
        />
      </Routes>
    </main>
  );
};

export default App;
