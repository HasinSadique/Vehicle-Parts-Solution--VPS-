import React, { useEffect, useState } from "react";
import PartsCard from "../PartsCard/PartsCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Review from "../Review/Review";
import BusinessSummary from "./BusinessSummary/BusinessSummary";

const Home = () => {
  const [user] = useAuthState(auth);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://vehicle-parts-solution.herokuapp.com/getParts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  // For Reviews
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://vehicle-parts-solution.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="lg:flex items-center gap-4 bg-blue-800 text-white p-10">
        <div className="lg:w-1/2 ">
          <h1 className="text-left mb-10 text-2xl font-semibold">
            Company Profile
          </h1>
          <br />
          <p className="text-left text-justify">
            Vehicle Parts Solution, founded in 1928, is a global service
            organization engaged in the distribution of automotive and
            industrial replacement parts. The Company serves hundreds of
            thousands of customers from a network of more than 10,000 locations
            in across North America, Europe, and Australasia and has
            approximately 50,000 employees.
          </p>
        </div>
        <div className="mx-auto">
          <img
            className="mt-10 lg:mt-0"
            src="https://www.genpt.com/image/Mask%2BGroup%2B1.png"
            alt=""
          />
        </div>
      </div>
      {/* Parts Max 6 */}
      <div className="mt-40 mb-16 lg:mx-60 md:mx-28 mx-20">
        <h1 className="mt-5 text-2xl text-center font-semibold mb-10 text-black">
          Parts LineUp {parts.length}
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {parts.slice(parts.length - 3, parts.length).map((item) => (
            <PartsCard key={item._id} item={item}></PartsCard>
          ))}
        </div>
      </div>
      {/* <div className="mb-40">
        <a
          className="border-orange-600 border-2 hover:bg-orange-600 rounded-3xl hover:text-white px-8 py-1.5"
          href=""
        >
          Show All Parts
        </a>
      </div> */}
      {/* Business Summary */}
      <div className="p-10 bg-stone-100 border-4 rounded-xl lg:w-1/2 mx-auto ">
        <h1 className="text-2xl text-left font-semibold mb-10 text-black">
          Business Summary
        </h1>
        <p className="text-left text-black font-semibold text-justify">
          In 1928, Carlyle Fraser founded VPS with the purchase of Motor Parts
          Depot in Atlanta, Georgia for $40,000. He then renamed the parts store
          Vehicle Parts Solution. The original VPS store had annual sales of
          $75,000 and had only six employees. In relationship with NAPA, VPS
          grew its automotive business to become the largest automotive
          aftermarket network across the globe. From the beginning, VPS has
          focused on providing its customers with quality products and swift,
          reliable service. The Company has grown organically and through
          acquisitions, including the addition of Motion Industries, a leading
          industrial distributor, in 1976. Today, Vehicle Parts Solution is a
          global service organization engaged in the distribution of automotive
          and industrial replacement parts with approximately 50,000 employees
          and over 10,000 operations in 15 countries across North America,
          Europe and Australasia.
        </p>
      </div>
      <BusinessSummary></BusinessSummary>
      {/* Reviews */}

      <div className=" bg-yellow-50">
        <h1 className="mt-32 text-3xl text-black pt-5">
          Client's Review About Us{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 py-10">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>

      <h1 className="text-center text-3xl mt-36 text-black font-bold mb-5">
        Installing The Karma Widebody Kit!
      </h1>
      <iframe
        className="mx-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2SaGCn9FQIE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Home;
