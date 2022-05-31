import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Login from "./Pages/Auth/Login";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import SignUp from "./Pages/Auth/SignUp";
import RequireAuth from "./Pages/Auth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Profile from "./Pages/Dashboard/Profile";
import Reviews from "./Pages/Dashboard/Reviews";
import Orders from "./Pages/Dashboard/Orders";
import Users from "./Pages/Dashboard/Users";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Purchase from "./Pages/Purchase/Purchase";
import Payment from "./Pages/Dashboard/Payment";
import "./App.css";
import RequireAdmin from "./Pages/Auth/RequireAdmin";
import Shop from "./Pages/Shop/Shop";
import ResetPassword from "./Pages/Auth/ResetPassword";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={ <RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="manageOrder" element={<RequireAdmin><ManageOrder /></RequireAdmin>} />
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path="makeAdmin" element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;