import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <NavLink to="profile">Profile</NavLink>{" "}
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;