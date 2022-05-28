import React, { useEffect, useState } from "react";
// import quote from "../../assets/icons/quote.svg";
import Review from "../Review/Review";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-28 max-w-7xl mx-auto px-12">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Customers' Reviews</h4>
          <h2 className="text-3xl">About Our Products & Services</h2>
        </div>
        {/* <div>
          <img src={quote} className="lg:w-48 w-24 animated" alt="" />
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
