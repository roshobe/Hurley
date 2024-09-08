import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react"; // Ensure this import is correct
import MainDashBoard from "./Pages/MainDashboard"; // Make sure the path is correct
import Landingpage from "./Pages/Landingpage";
import Jobs from "./Pages/Jobs";
import ProductPage from "./Pages/ProductPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  // Make sure to return the JSX
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />{" "}
        <Route path="/Dashboard" element={<MainDashBoard />} />{" "}
        <Route path="/Jobs" element={<Jobs />} />{" "}
        <Route path="/ProductPage" element={<ProductPage />} />{" "}
        <Route path="/ProfilePage" element={<ProfilePage />} />{" "}
        {/* Set MainDashboard as the homepage */}
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
