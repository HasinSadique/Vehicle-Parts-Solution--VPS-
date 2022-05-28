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
import MyProfileSetting from "./components/MyProfileSetting/MyProfileSetting";
import MyProfile from "./components/MyProfile/MyProfile";
import Payment from "./components/Dashboard/MyOrders/Payment/Payment";
import AddPart from "./components/Dashboard/AddPart/AddPart";
import MyReview from "./components/Dashboard/MyReview/MyReview";
import ViewAllUsers from "./components/Dashboard/ViewAllUsers/ViewAllUsers";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App bg-blue-50">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/reviews" element={<Testimonials></Testimonials>}></Route>
        <Route
          path="my-profile"
          element={
            <RequireAuth>
              <MyProfile></MyProfile>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="my-profile-settings"
          element={
            <RequireAuth>
              <MyProfileSetting></MyProfileSetting>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route element={<MyOrders></MyOrders>}></Route>
          <Route path="add-part" element={<AddPart></AddPart>}></Route>
          <Route
            path="view-users"
            element={<ViewAllUsers></ViewAllUsers>}
          ></Route>
          <Route path="add-review" element={<MyReview></MyReview>}></Route>
          <Route path="payment/:orderid" element={<Payment></Payment>}></Route>
        </Route>

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
