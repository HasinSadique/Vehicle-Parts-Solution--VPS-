import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import "./NavBar.css";

const Navbar = () => {
  const [openAnchors, setOpenAnchors] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user] = useAuthState(auth);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className=" bg-transparent p-3 shadow border-b-2  ">
      <div className="flex">
        {/* menu button for small device */}
        <div
          onClick={() => setOpenAnchors(!openAnchors)}
          className="w-8 my-auto cursor-pointer h-8 lg:hidden"
        >
          {openAnchors ? <XIcon> </XIcon> : <MenuIcon></MenuIcon>}
        </div>
        {/*  Logo  */}
        <div className=" flex-none my-auto">
          <h1
            onClick={() => {
              navigate(`/`);
            }}
            className="flex items-center cursor-pointer font-semibold text-2xl text-orange-500"
          >
            <img
              className="w-16 mx-3"
              src="https://images-platform.99static.com/k5MjBPDQVu3I2iTKTg7cFMW1zLI=/500x500/top/smart/99designs-contests-attachments/55/55306/attachment_55306219"
            />
            Vehicle Parts <span className="text-black ml-1.5">Solution</span>
          </h1>
        </div>
        {/* Navbar anchors */}
        <div
          className={`bg-white lg:grow lg:my-auto lg:mx-10 ${
            user ? "" : "lg:mx-60"
          } lg:static absolute duration-500 ease-in ${
            openAnchors
              ? "top-20 w-3/4 p-5 mx-auto rounded-2xl border-2"
              : "top-[-200px]"
          } `}
        >
          <ul
            className={`lg:flex lg:justify-around ${user ? "lg:mx-32" : ""} `}
          >
            <li className=" hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a className="" href="/">
                Home
              </a>
            </li>

            <li
              className={`${
                user ? "" : "hidden"
              } hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-11`}
            >
              <a className=" text-center" href="/dashboard">
                Dashboard
              </a>
            </li>
            {/* For Admin Role */}
            {/* add part */}
            {/* <li
              className={`${
                user ? "" : "hidden"
              } hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10`}
            >
              <a href="/parts-inventory">Manage Parts</a>
            </li> */}
            <li
              className={`
               hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10`}
            >
              <a href="/reviews">Reviews</a>
            </li>
            <li
              className={`
               hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10`}
            >
              <a href="/my-portfolio">My Portfolio</a>
            </li>
            <li className="hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a href="/blog"> Blog </a>
            </li>
          </ul>
        </div>
        {/* User Account Info */}
        <button
          onClick={() => setOpenProfile(!openProfile)}
          className="ml-auto hover:bg-slate-200 lg:px-10 px-4 flex items-center rounded-lg"
        >
          {user?.photoURL ? (
            <img
              className="rounded-full w-10 h-10"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          className={`${
            openProfile
              ? "absolute top-20 right-0 w-80 bg-blue-50 border-b-2 border-x-2 rounded-bl-3xl "
              : "hidden"
          }`}
        >
          {user ? (
            <div className="divide-y">
              <div className="px-4 py-3 text-sm">
                <div>{user.displayName}</div>
                <div className="font-medium truncate">{user.email}</div>
              </div>
              <ul
                className="py-1 text-sm text-gray-700 text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 text-black hover:bg-blue-100"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-black hover:bg-blue-100"
                  >
                    Profile Settings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  onClick={() => signOut(auth)}
                  href="#"
                  className="block text-sm ml-1.5 py-2 rounded-bl-3xl text-black hover:bg-blue-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          ) : (
            <div className="h-20 flex justify-center items-center">
              <a className="" href="/signin">
                Sign In
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
