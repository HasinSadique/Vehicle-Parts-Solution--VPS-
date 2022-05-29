import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const PartsCard = (props) => {
  const [user] = useAuthState(auth);
  const {
    _id,
    name,
    price,
    image,
    description,
    min_order_qnty,
    available_qnty,
  } = props.item;

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/check-user-role?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, []);

  console.log("Role: ", currentUser.userRole);

  //Get Image
  // console.log("IMG: ", props.item);

  const location = useLocation();
  const navigate = useNavigate();

  const navigateToPurchasePart = (id) => {
    navigate(`/getParts/${id}`);
  };

  return (
    <div className=" text-slate p-2 rounded-3xl">
      <div className="h-full bg-base-100 shadow-2xl ">
        <figure>
          <img
            className="w-full h-60 mx-auto rounded-t-3xl mb-5"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <p className="text-left mt-2">{description}</p>
          <h1 className="mt-10 text-xl font-bold text-white">
            Price: ${price}
          </h1>
          <div className="mt-10">
            {currentUser.userRole != "Admin" ? (
              <button
                onClick={() => navigateToPurchasePart(_id)}
                className="bg-orange-600 text-white px-5 py-1 mb-5
            "
              >
                BUY NOW
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
