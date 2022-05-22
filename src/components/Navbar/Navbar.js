import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className=" bg-transparent p-3 shadow border-b-2  ">
      <div className="flex">
        {/* menu button for small device */}
        <div
          onClick={() => setOpen(!open)}
          className="w-8 my-auto cursor-pointer h-8 lg:hidden"
        >
          {open ? <XIcon> </XIcon> : <MenuIcon></MenuIcon>}
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
            open
              ? "top-20 w-3/4 p-5 mx-auto rounded-2xl border-2"
              : "top-[-200px]"
          } `}
        >
          <ul className="lg:flex lg:justify-around ">
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
              <a className=" text-center" href="/add-items">
                Add Items
              </a>
            </li>
            <li
              className={`${
                user ? "" : "hidden"
              } hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10`}
            >
              <a href="/inventory">Manage Inventory</a>
            </li>
            {/* <li className="hover:bg-orange-500 lg:hover:text-orange-400 lg:hover:scale-110 lg:transition ease-out delay-100 lg:h-0 h-10">
              <a href="/blog"> Blog </a>
            </li> */}
          </ul>
        </div>
        {/* User Account Info */}
        <div className="flex-none my-auto mx-auto">
          {user ? (
            <div className="flex my-auto">
              {user.photoURL ? (
                <img
                  className="rounded-full w-12 h-12"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              <button onClick={() => signOut(auth)} className=" my-auto mx-5">
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-12 lg;w-12 h-8 w-8"
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
              <a className=" my-auto " href="/signin">
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
