import React, { useEffect, useState } from "react";
import PartsCard from "../PartsCard/PartsCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getParts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  console.log("UserAuthState: ", user);

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
        <h1 className="mt-5 text-2xl text-center font-semibold mb-10">
          Parts LineUp {parts.length}
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {parts.slice(0, 3).map((item) => (
            <PartsCard key={item._id} item={item}></PartsCard>
          ))}
        </div>
      </div>
      <div className="mb-40">
        <a
          className="border-orange-600 border-2 hover:bg-orange-600 rounded-3xl hover:text-white px-8 py-1.5"
          href=""
        >
          Show All Parts
        </a>
      </div>
      {/* Business Summary */}
      <div className="p-10 bg-stone-100 border-4 rounded-xl lg:w-1/2 mx-auto ">
        <h1 className="text-2xl text-left font-semibold mb-10">
          Business Summary
        </h1>
        <p className="text-left text-justify">
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
      {/* Reviews */}
      <div>
        <div className="mt-20 bg-stone-100 w-3/4 mx-auto">
          <h1 className="text-2xl font-semibold">Client Reviews</h1>

          <span className="flex">
            User Name
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
