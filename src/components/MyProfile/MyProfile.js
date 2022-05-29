import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [userDB, setUserDB] = useState({});

  //   Fetch User Profile Details
  useEffect(() => {
    fetch(
      `https://vehicle-parts-solution.herokuapp.com/get-userdetails?user=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserDB(data));
  }, []);
  return (
    <div className=" text-black p-10">
      <h1 className=" text-3xl font-bold">My Details</h1>
      <div className="grid grid-cols-2 gap-5 my-5 mx-10 ">
        <div className="bg-blue-100 p-5 rounded-3xl">
          <h1 className="text-xl font-semibold text-center mb-5">
            Personal Details
          </h1>
          <h1 className="text-left">
            Full Name : {user?.displayName || userDB.name}{" "}
          </h1>
          <h1 className="text-left text-black">
            Email : {user?.email || userDB.email}{" "}
          </h1>
          <h1 className="text-left">Phone: {userDB.phone} </h1>
          <h1 className="text-left">City: {userDB.city} </h1>
        </div>

        <div className="bg-blue-100 p-5 rounded-3xl">
          <h1 className="text-xl font-semibold text-center mb-5">
            Education & Social
          </h1>
          <h1 className="text-left">
            Undergraduation: {userDB.undergraduation}
          </h1>
          <h1 className="text-left">LinkedIn: {userDB.linkedInProfile}</h1>
        </div>
      </div>
      <a href="/my-profile-settings">Edit Info</a>
    </div>
  );
};

export default MyProfile;
