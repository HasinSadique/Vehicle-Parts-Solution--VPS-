import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderModal from "./OrderModal";

const PurchasePart = () => {
  const { itemId } = useParams();
  const [placeOrder, setPlaceOrder] = useState(null);
  const [part, setPart] = useState({});
  const [orderQuantity, setOrderQuantity] = useState(0);

  const url = `http://localhost:5000/getParts/${itemId}`;
  useEffect(() => {
    // const url = `https://vehicle-parts-solution.herokuapp.com/getParts/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  useEffect(() => {
    // const url = `https://vehicle-parts-solution.herokuapp.com/getParts/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderQuantity(data.minimumOrder));
  }, []);

  console.log("Part: ", part);

  const handlePlaceorder = () => {
    <OrderModal setPlaceOrder={setPlaceOrder}></OrderModal>;
  };

  const handleIncreaseOrderQuantity = () => {
    let increasedQnty = parseInt(orderQuantity) + 1;
    if (increasedQnty <= parseInt(part.availableQuantity)) {
      setOrderQuantity(increasedQnty);
    }
  };
  const handleDecreaseOrderQuantity = () => {
    let decreasedQnty = parseInt(orderQuantity) - 1;
    if (decreasedQnty >= parseInt(part.minimumOrder)) {
      setOrderQuantity(decreasedQnty);
    }
  };

  return (
    <div>
      <div className="bg-slate-500 lg;w-1/4 w-3/4 lg:flex mx-auto border-2 my-20 rounded-2xl">
        <img
          className="lg:w-1/3 mx-auto lg:rounded-l-xl md:rounded-t-xl"
          src={part.image}
        />
        <div className=" my-5">
          <h1 className="text-white font-bold text-2xl">{part.name}</h1>
          <h2 className="w-3/4 text-justify mx-auto my-5 text-white">
            <span className="block ">Description</span>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              ex libero atque mollitia itaque, praesentium a, nihil est quis
              voluptas iste? Autem doloremque distinctio commodi tempora earum
              delectus temporibus dolores!
            </small>
          </h2>
          <h2 className="text-white">
            Minimum Order Quantity: {part.minimumOrder}
          </h2>
          <h2 className="text-white">
            Available Quantity: {part.availableQuantity}
          </h2>
          <h2 className="text-white mb-2">Price per Quantity: ${part.price}</h2>
          <div className=" flex justify-center items-center mb-10">
            <button
              onClick={handleDecreaseOrderQuantity}
              className=" border-2 border-orange-500 mr-3 w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h1 className="text-white">
              Order Quantity: {parseInt(orderQuantity)}{" "}
            </h1>
            <button
              onClick={handleIncreaseOrderQuantity}
              className=" border-2 border-orange-500 ml-3 w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <h1 className="font-extrabold text-3xl mb-5 text-white">
            Total Price: ${part.price * parseInt(orderQuantity)}
          </h1>
          <label
            onClick={setPlaceOrder}
            // onClick={() => handlePlaceorder()}
            htmlFor="order-modal"
            className=" modal-button text-white bg-orange-500 px-5 py-1.5 rounded-xl"
          >
            Place Order
          </label>
          {placeOrder && (
            <OrderModal
              setPlaceOrder={setPlaceOrder}
              partName={part.name}
              price={part.price * parseInt(orderQuantity)}
              quantity={parseInt(orderQuantity)}
            ></OrderModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchasePart;
