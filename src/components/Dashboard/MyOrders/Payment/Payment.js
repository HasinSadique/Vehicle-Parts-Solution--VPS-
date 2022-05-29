// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";

// const stripePromise = loadStripe(
//   "pk_test_51L3ofqLRrtcADGJCcnpTH6Vg4AhgxMD9XmbMBO2tNuYgDjx1mR6jJKFO1v4fEh57lhPE6Uus3ABmnJtcbrdYwURI00W2WvetGX"
// );

// const Payment = () => {
//   const [order, setOrder] = useState({});

//   const { orderid } = useParams();
//   useEffect(() => {
//     const url = `https://vehicle-parts-solution.herokuapp.com/booking/${orderid}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setOrder(data));
//   }, []);
//   //   console.log(order);
//   //   const { _id, partName, orderedQuantity, price, payment } = order;
//   return (
//     <div className=" w-full my-auto">
//       <div class="card w-3/4 lg:w-1/2 mx-auto bg-slate-700 shadow-xl">
//         <div class="card-body">
//           <h2 class="font-bold text-xl text-center">
//             Make payment for {order.partName}
//           </h2>
//           <p>You will recieve the delivery within 5-7 days</p>
//           <div className="mb-10 mt-5">
//             <small> Order ID: {order._id}</small>
//             <h3 className="text-left mt-3"> Item Name: {order.partName}</h3>
//             <h3 className="text-left">Quantity: {order.orderedQuantity}</h3>
//             <h3 className="text-left">Price: ${order.price}</h3>
//           </div>
//         </div>
//       </div>
//       <div class="card w-3/4 lg:w-1/2 mx-auto bg-slate-700 shadow-xl">
//         <div class="card-body">
//           <Elements stripe={stripePromise}>
//             <CheckoutForm order={order} />
//           </Elements>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm/CheckoutForm";
import Loading from "../../../Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51L3ofqLRrtcADGJCcnpTH6Vg4AhgxMD9XmbMBO2tNuYgDjx1mR6jJKFO1v4fEh57lhPE6Uus3ABmnJtcbrdYwURI00W2WvetGX"
);

const Payment = () => {
  const { orderid } = useParams();

  const { data: order, isLoading } = useQuery(["booking"], () =>
    fetch(`http://localhost:5000/booking/${orderid}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  //   console.log("order: ", order);

  return (
    <div className="px-12  w-full">
      <div className="border-2 mx-auto card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-warning font-bold text-xl">
            Hello, {order.userEmail}
          </p>
          <h2 className="font-bold ">Please Pay for: {order.partName}</h2>
          <p>Your Ordered invoice no: {order._id}</p>
          <p>Your Ordered quantity: {order.orderedQuantity}</p>
          <p className="font-semibold text-xl text-orange-500">
            Please pay: ${order.price}
          </p>
        </div>
      </div>
      <div className="border-2 mx-auto card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
