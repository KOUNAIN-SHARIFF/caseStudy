import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewAllPage from "./pages/ViewAllCat/ViewAllCat";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ShopByPage from "./pages/ShopByCatPage/ShopByCatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/categories" element={<ViewAllPage />}></Route>
          <Route path="/products" element={<ProductListingPage />}></Route>
          <Route path="/shop" element={<ShopByPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
