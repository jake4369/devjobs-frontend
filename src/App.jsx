import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login";
import AllJobs from "./pages/AllJobs";

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
      <Header
        setShowModal={setShowModal}
        searchObject={searchObject}
        setSearchObject={setSearchObject}
      />

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
