import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate, useLocation } from "react-router-dom";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  // const [part, setPart] = useState(initialState);

  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/get-orders?buyer=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleDeleteItemClick = (OrderID) => {
    fetch(`http://localhost:5000/delete-item/${OrderID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Status == 200) {
          //navigate to Inventory List
          window.location.reload(true);
        }
      });
  };

  // console.log(myOrders);
  return (
    <div className=" bg-base-100 w-full text-white">
      <h2 className="text-3xl font-bold mt-5 ml-3 text-white mb-10 mt-5">
        Your Dashboard
      </h2>
      {myOrders.length > 0 ? (
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="bg-base-100">SL</th>
              <th className="text-center ">Order ID</th>
              <th className="text-center">Part Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Payment</th>
            </tr>
          </thead>

          {myOrders.map((order, index) => (
            <tr className="bg-slate-600 border-b-2">
              <th className="text-center bg-slate-600">{index + 1}</th>
              <td className="text-center">{order._id}</td>
              <td className="text-center">{order.partName}</td>
              <td className="text-center">{order.orderedQuantity}</td>
              <td className="text-center">{order.price}</td>
              <td className="text-center">
                {order.payment ? (
                  "Paid"
                ) : (
                  <div className="flex justify-center items-center">
                    <label for="my-modal-6" class="modal-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 hover:scale-125"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </label>

                    <a
                      className="hover:bg-orange-600 border-2 text-white px-5 py-1 rounded-2xl ml-2 hover:scale-105"
                      href=""
                    >
                      Make Payment
                    </a>
                  </div>
                )}
              </td>
              <tbody>
                {/* Modal for confirmation */}
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class=" z-30 modal modal-bottom sm:modal-middle">
                  <div class="  modal-box">
                    <h3 class="font-bold text-lg text-center">
                      Item Delete Confirmation
                    </h3>
                    <p class="py-4 mt-3">
                      Are you sure you want to delete{" "}
                      <span className="text-xl font-semibold">
                        {order.partName}
                      </span>{" "}
                      from your orders?
                    </p>
                    <div class="flex justify-around mt-10 modal-action">
                      <label
                        onClick={() => handleDeleteItemClick(order._id)}
                        for="my-modal-6"
                        class="btn bg-red-600 text-white"
                      >
                        Confirm
                      </label>
                      <label
                        onClick={() => handleDeleteItemClick(order._id)}
                        for="my-modal-6"
                        class="btn text-white"
                      >
                        Cancel
                      </label>
                    </div>
                  </div>
                </div>
                {/* Modal for confirmation */}
              </tbody>
            </tr>
          ))}

          <tbody>
            {/* <!-- row 1 --> */}

            {/* <!-- row 2 --> */}
            {/* <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr> */}
            {/* <!-- row 3 --> */}
            {/* <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr> */}
          </tbody>
        </table>
      ) : (
        <h1 className="">You have no orders</h1>
      )}
    </div>
    // <div>My Orders</div>
  );
};

export default MyOrders;
