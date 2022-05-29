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

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="mx-auto">
              <th></th>
              <th>Order ID</th>
              <th>User Email</th>
              <th>Part Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Actions</th>
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
                  {order.payment ? (
                    <button className="btn bg-green-500">Make Shipment</button>
                  ) : (
                    <button
                      onClick={() => handleDeleteItemClick(order._id)}
                      className="btn bg-red-600 text-white"
                    >
                      Cancel Order
                    </button>
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
