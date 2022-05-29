import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-all-orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
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

  const handleMakeShipmentClick = (OrderID) => {
    // /make-shipment/:id
    fetch(`http://localhost:5000/make-shipment/${OrderID}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          //navigate to Inventory List
          window.location.reload(true);
        }
      });
  };

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="mx-auto">
              <th></th>
              <th className="text-center">Order ID</th>
              <th className="text-center">User Email</th>
              <th className="text-center">Part Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order._id}</td>
                <td>{order.userEmail}</td>
                <td>{order.partName}</td>
                <td>{order.price}</td>
                <td className="text-center">{order.orderedQuantity}</td>
                <td>
                  {order.payment ? (
                    <h1 className="bg-green-600">Paid</h1>
                  ) : (
                    <h1 className="bg-red-600 text-white text-center rounded-xl px-2">
                      Unpaid
                    </h1>
                  )}
                </td>
                <td>{order.status}</td>
                <td>
                  {order.Order_Status != "Shipped" ? (
                    <div>
                      <button
                        onClick={() => handleMakeShipmentClick(order._id)}
                        className="btn bg-green-500 text-white"
                      >
                        Make Shipment
                      </button>
                      <button
                        onClick={() => handleDeleteItemClick(order._id)}
                        className="btn bg-red-600 text-white"
                      >
                        Cancel Order
                      </button>
                    </div>
                  ) : (
                    <h1>Shipped</h1>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
