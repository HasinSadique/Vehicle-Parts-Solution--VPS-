import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PartsCard = (props) => {
  const {
    _id,
    name,
    price,
    image,
    description,
    min_order_qnty,
    available_qnty,
  } = props.item;

  const location = useLocation();
  const navigate = useNavigate();

  const navigateToPurchasePart = (id) => {
    navigate(`/getParts/${id}`);
  };

  return (
    <div className="  text-slate p-2 rounded-3xl">
      <div className=" bg-base-100 shadow-2xl ">
        <figure>
          <img
            className="w-full h-60 mx-auto rounded-t-3xl mb-5"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <p>{description}</p>
          <div className="mt-10">
            <button
              onClick={() => navigateToPurchasePart(_id)}
              className="bg-orange-600 text-white px-5 py-1 mb-5
            "
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
