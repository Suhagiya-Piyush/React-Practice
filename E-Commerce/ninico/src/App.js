import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Error from "./Pages/Error";
import { Contact } from "./Pages/Contact";
import { SignIN } from "./Pages/SignIN";
import { WishlistPage } from "./Pages/Wishlist";
import { ProductMain } from "./Pages/ProductMain";
import { Shop } from "./Pages/Shop";
import { AboutMain } from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/signin" element={<SignIN />} />
          <Route path="/login" element={<SignIN />} />
          <Route path="/product/:id" element={<ProductMain/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<AboutMain/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
