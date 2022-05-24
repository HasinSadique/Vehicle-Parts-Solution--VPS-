import React from "react";

const HorizontalNavBar = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label
            for="my-drawer-2"
            class="h-screen flex items-center absolute left-0 rounded-r-2xl bg-base-100 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=" h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="rounded-r-3xl menu p-4 overflow-y-auto lg:w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a href="/my-orders">My Orders</a>
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
