import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Handbags from "../Pages/Handbags";
import Watches from "../Pages/Watches";
import Skincare from "../Pages/Skincare";
import Jewellery from "../Pages/Jewellery";
import Apparels from "../Pages/Apparels";
import Categories from "../Pages/Categories";
import Profile from "../Pages/Profile";
import MyBag from "../Pages/MyBag";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mybag" element={<MyBag />} />
        <Route path="/handbags" element={<Handbags />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/apparels" element={<Apparels />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
