import React, { useEffect, useState } from "react";
// import quote from "../../assets/icons/quote.svg";
import Review from "../Review/Review";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://vehicle-parts-solution.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className=" bg-orange-100">
      <div className="flex justify-between bg-orange-600 ">
        <div className="mx-auto text-white">
          <h4 className="text-4xl  font-bold">Customers' Reviews</h4>
          <h2 className="text-lg my-5">About Our Products & Services</h2>
        </div>
        {/* <div>
          <img src={quote} className="lg:w-48 w-24 animated" alt="" />
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 p-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
