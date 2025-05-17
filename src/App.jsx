



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./Emp/EmployeeForm";
import Profile from "./Emp/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
