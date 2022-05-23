import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-20 z-0">
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content px-2">
          <h2 className="text-2xl font-bold text-purple-500 text-center">
            Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content gap-y-2">
            <li>
              <Link to="/dashboard">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/orders">Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;