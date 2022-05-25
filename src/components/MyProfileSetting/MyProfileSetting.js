import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../../firebase.init";

const MyProfileSetting = () => {
  const [name, setName] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [undergraduation, setUndergraduation] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleSubmitProfile = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.displayName || name,
        email: user?.email,
        city: city,
        phone: phone,
        linkedInProfile: linkedInProfile,
        undergraduation: undergraduation,
      }),
    };

    fetch("http://localhost:5000/add-profile-info", requestOptions)
      .then((res) => res.json())
      .then((data) => setResponse(data));
    if (response.result.acknowledged == true) {
      navigate("/my-profile", { replace: true });
    }
  };

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleLinkedInProfileBlur = (event) => {
    setLinkedInProfile(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handleCityBlur = (event) => {
    setCity(event.target.value);
  };
  const handleUndergraduationBlur = (event) => {
    setUndergraduation(event.target.value);
  };
  return (
    <div className="bg-blue-100 pt-3 pb-10">
      <h1 className="text-black font-semibold text-2xl mb-3 ">
        My Profile Information
      </h1>
      <div className="lg:w-1/2 w-3/4 bg-blue-300 p-5 mx-auto rounded-2xl">
        <form
          onSubmit={handleSubmitProfile}
          className="grid grid-cols-1 justify-items-center gap-4 lg:w-1/2 mx-auto"
        >
          <input
            onBlur={handleNameBlur}
            type="text"
            placeholder={user.displayName ? user.displayName : "Full name"}
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="Email"
            placeholder={user?.email}
            class="input input-bordered w-full max-w-xs"
            disabled
          />
          <input
            onBlur={handleUndergraduationBlur}
            type="text"
            placeholder="Undergraduation"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            onBlur={handleCityBlur}
            type="text"
            placeholder="City"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            onBlur={handlePhoneBlur}
            type="text"
            placeholder="Phone Number"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            onBlur={handleLinkedInProfileBlur}
            type="text"
            placeholder="LinkedIn Profile"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            className="btn hover:bg-orange-500 text-white"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfileSetting;
