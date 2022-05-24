import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center text-white">
        <p> Initialising User... </p>{" "}
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p> Error: {error} </p>{" "}
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace>
        {" "}
      </Navigate>
    );
  } else {
    return children;
  }
};

export default RequireAuth;
