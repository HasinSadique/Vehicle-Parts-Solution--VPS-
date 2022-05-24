import React from "react";
import HorizontalNavBar from "./HorizontalNavBar/HorizontalNavBar";
import { Routes, Route } from "react-router";
import MyOrders from "./MyOrders/MyOrders";

const Dashboard = () => {
  return (
    <div>
      <HorizontalNavBar></HorizontalNavBar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/my-orders" element={<MyOrders></MyOrders>}></Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
