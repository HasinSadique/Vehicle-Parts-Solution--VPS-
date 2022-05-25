import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderModal = (props) => {
  const { setPlaceOrder } = props;
  const { partName } = props;
  const { price } = props;
  const { quantity } = props;
  const [user] = useAuthState(auth);

  const [response, setResponse] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [address, setAddress] = useState("");

  const handelConfirmOrder = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partName: partName,
        Quantity: quantity,
        price: price,
        Email: user.email,
      }),
    };

    fetch("http://localhost:5000/booking", requestOptions)
      .then((res) => res.json())
      .then((data) => setResponse(data));
    if (response.success == true) {
      //   window.location.reload();
      // got to my Orders
    }
    setPlaceOrder(null);
  };

  const handleMobileNumBlur = (event) => {
    setMobNumber(event.target.value);
  };

  const handleAddressNumBlur = (event) => {
    setMobNumber(event.target.value);
  };
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="mb-10">
            {" "}
            Total Cost for {quantity} {partName}s are ${price}{" "}
          </h1>
          <form
            onSubmit={handelConfirmOrder}
            className=" grid grid-cols-1 justify-items-center gap-4 "
          >
            <input
              type="email"
              placeholder={user.email}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <input
              type="text"
              placeholder={user.email}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="input input-bordered w-full max-w-xs"
              onBlur={handleMobileNumBlur}
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
              onClick={handleAddressNumBlur}
            />
            <div className="">
              <input
                className="btn modal-action"
                value="Confirm Order"
                type="submit"
              ></input>
              <button className="btn modal-toggle"> Cancel </button>
            </div>
            <div
              className={`${response.success ? " text-green-600" : "hidden"}`}
            >
              {response.msg}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
