import React from "react";

const Review = ({ review }) => {
  const { img, name, ratings, addComment } = review;

  return (
    <div>
      <div className="card bg-base-100 shadow-2xl">
        <div className="flex justify-around border-b-2 py-4">
          <div className=" avatar">
            <div className="w-12 rounded-full ring ring-warning ring-offset-base-100">
              <img className="" src={img} alt="" />
            </div>
          </div>

          <div>
            <h4 className="text-xl">{name}</h4>
            <p className="text-left">Rating: {ratings}</p>
          </div>
        </div>
        {/* <hr className="border-2"></hr> */}
        <div className="card-body animated">
          <h1 className="text-left text-white">Comment:</h1>
          <p className="text-left ">{addComment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
