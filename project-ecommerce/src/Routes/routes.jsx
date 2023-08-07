//Router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import About from "../Pages/About";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Profile from "../Pages/Profile";
import MyBag from "../Pages/MyBag";
import Notification from "../Pages/Notification";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddProduct from "../Pages/AddProduct";
import GetStarted from "../Pages/GetStarted";
import Erro404 from "../Pages/Page404";

//Routes private
import Private from "./private";
import ProductData from "../Pages/ProductData";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/profile"
          element={
            <Private>
              <Profile />
            </Private>
          }
        />
        <Route path="/mybag" element={<MyBag />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/addproduct"
          element={
            <Private>
              <AddProduct />
            </Private>
          }
        />
        <Route path="/product/:id" element={<ProductData />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
