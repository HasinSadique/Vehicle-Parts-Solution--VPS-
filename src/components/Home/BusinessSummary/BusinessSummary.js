import React from "react";

const BusinessSummary = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 ">
      <div className="stats stats-vertical lg:stats-horizontal shadow my-20 px-12">
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold text-black">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc font-bold text-black">
              21% more than last month
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold text-black">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc font-bold text-black">
              21% more than last month
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#F48554]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div className="stat-title font-bold text-black">Home Delivery</div>
            <div className="stat-value text-[#F48554]">158</div>
            <div className="stat-desc font-bold text-black">
              12KK products home delivered
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="stat-title font-bold text-black">
              Completed Shipment
            </div>
            <div className="stat-value text-accent">273+</div>
            <div className="stat-desc font-bold text-black">
              More then 20K products delivered
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://api.lorem.space/image/face?w=128&h=128" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="font-bold text-black">Tasks done</div>
            <div className="stat-desc text-secondary font-bold ">
              31 tasks remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
