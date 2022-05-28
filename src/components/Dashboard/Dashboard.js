import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
// import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  // const [admin] = useAdmin(user);
  const [userLoggedIn, setUserLoggedIn] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/check-user-role?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserLoggedIn(data));
  }, []);
  // const { user } = userLoggedIn;
  // const { userRole } = currentUser;
  // console.log(userLoggedIn.currentUser);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className=" flex drawer-content bg-base-100 ">
        <label
          for="dashboard-sidebar"
          className="border-r-2 border-slate-800 flex pt-3 rounded-r-2xl bg-base-100 lg:hidden"
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

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-200 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {userLoggedIn.userRole == "Customer" ? (
            <div>
              <li>
                <Link className="mx-auto" to="/">
                  My orders
                </Link>
              </li>
              <li>
                <Link className="mx-auto" to="/dashboard/add-review">
                  Add a review
                </Link>
              </li>
            </div>
          ) : (
            <></>
          )}

          {userLoggedIn.userRole == "Admin" ? (
            <div>
              <li>
                <Link className="mx-auto" to="/dashboard/add-part">
                  Add a new product
                </Link>
              </li>
              <li>
                <Link className="mx-auto" to="/manage-parts">
                  Manage products
                </Link>
              </li>
              <li>
                <Link className="mx-auto" to="/view-users">
                  View all users
                </Link>
              </li>
            </div>
          ) : (
            <></>
          )}
          {/* <li><Link to="/dashboard/review">My Reviews</Link></li> */}
          {/* <li><Link to="/dashboard/profile">My Profile</Link></li> */}
          {/* {admin && <li><Link to="/dashboard/users">All Users</Link></li>} */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
