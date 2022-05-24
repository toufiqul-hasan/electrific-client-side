import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
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
import { QueryClient, QueryClientProvider } from "react-query";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import AddProduct from "./Pages/Dashboard/AddProduct";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="manageOrder" element={<ManageOrder />} />
          <Route path="manageProduct" element={<ManageProduct />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route
            path="makeAdmin"
            element={
              <QueryClientProvider client={queryClient}>
                <Users />
              </QueryClientProvider>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;