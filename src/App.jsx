import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login";
import AllJobs from "./pages/AllJobs";

const App = () => {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobs" element={<AllJobs />} />
      </Routes>
    </main>
  );
};

export default App;
