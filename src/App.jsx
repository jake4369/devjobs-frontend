import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login";
import AllJobs from "./pages/AllJobs";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      <Header setShowModal={setShowModal} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/jobs"
          element={
            <AllJobs showModal={showModal} setShowModal={setShowModal} />
          }
        />
      </Routes>
    </main>
  );
};

export default App;
