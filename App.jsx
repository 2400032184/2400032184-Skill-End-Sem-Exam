import React, { useState } from "react";
import "./App.css";
import DashboardPage from "./DashboardPage.jsx";
import ProfilePage from "./ProfilePage.jsx";

const App = () => {
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => setPage("dashboard")}>
          Dashboard
        </button>
        <button className="nav-btn" onClick={() => setPage("profile")}>
          Profile
        </button>
      </div>

      {/* PAGE CONTENT */}
      <div className="main-content">
        {page === "dashboard" ? <DashboardPage /> : <ProfilePage />}
      </div>
    </div>
  );
};

export default App;
