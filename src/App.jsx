import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login";
import AllJobs from "./pages/AllJobs";

import { getAllJobs } from "./utils/api.js";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    getAllJobs().then((response) => setJobsData(response));
  }, []);

  return (
    <main>
      <Header setShowModal={setShowModal} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/jobs"
          element={
            <AllJobs
              showModal={showModal}
              setShowModal={setShowModal}
              jobsData={jobsData}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default App;
