import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderModal = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="mb-10"> Total Cost: </h1>
          <form className=" grid grid-cols-1 justify-items-center gap-4 ">
            <input
              type="text"
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
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="modal-action">
              <input className="btn" value="ConfirmOrder" type="submit"></input>
              <button className="btn"> Cancel </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
