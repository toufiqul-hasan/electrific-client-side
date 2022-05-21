import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Login from "./Pages/Auth/Login";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;