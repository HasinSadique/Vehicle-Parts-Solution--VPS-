import React from "react";

const Home = () => {
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
      {/* Business Summary */}
      <div className="p-10 lg:w-1/2 mx-auto ">
        <h1 className="text-2xl text-left font-semibold mb-10">
          Business Summary
        </h1>
        <p className="text-left text-justify">
          In 1928, Carlyle Fraser founded VPS with the purchase of Motor Parts
          Depot in Atlanta, Georgia for $40,000. He then renamed the parts store
          Genuine Parts Company. The original GPC store had annual sales of
          $75,000 and had only six employees. In relationship with NAPA, GPC
          grew its automotive business to become the largest automotive
          aftermarket network across the globe. From the beginning, GPC has
          focused on providing its customers with quality products and swift,
          reliable service. The Company has grown organically and through
          acquisitions, including the addition of Motion Industries, a leading
          industrial distributor, in 1976. Today, Genuine Parts Company is a
          global service organization engaged in the distribution of automotive
          and industrial replacement parts with approximately 50,000 employees
          and over 10,000 operations in 15 countries across North America,
          Europe and Australasia.
        </p>
      </div>
      {/* Reviews */}
    </div>
  );
};

export default Home;
