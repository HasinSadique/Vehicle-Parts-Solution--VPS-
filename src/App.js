import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import PurchasePart from "./components/PurchasePart/PurchasePart";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders/MyOrders";

function App() {
  return (
    <div className="App bg-blue-50">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route path="/my-orders" element={<MyOrders></MyOrders>}></Route>
        {/* <Route
          path="/my-orders"
          element={
            <Dashboard>
              <MyOrders></MyOrders>
            </Dashboard>
          }
        ></Route> */}

        {/* <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route> */}
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/getParts/:itemId"
          element={
            <RequireAuth>
              <PurchasePart></PurchasePart>
            </RequireAuth>
          }
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
