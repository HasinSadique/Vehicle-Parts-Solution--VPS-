import React from "react";
import { Outlet } from "react-router";
const HorizontalNavBar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            className="h-screen flex items-center absolute left-0 rounded-r-2xl bg-base-100 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="rounded-r-3xl menu p-4 overflow-y-auto lg:w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a href="my-orders">My Orders</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
