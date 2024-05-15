import "./App.css";
import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Error from "./Pages/Error";
import { Contact } from "./Pages/Contact";
import { SignIN } from "./Pages/SignIN";
import { WishlistPage } from "./Pages/Wishlist";
import { ProductMain } from "./Pages/ProductMain";
import { Shop } from "./Pages/Shop";
import { AboutMain } from "./Pages/About";

// redux
import { Provider } from "react-redux";
import  Store  from "./Store";
import { AddtoCart } from "./Components/Cart/AddtoCart";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIN />} />
            <Route path="/login" element={<SignIN />} />
            <Route path="/product/:id" element={<ProductMain />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/addtocart/" element={<AddtoCart />} />
            <Route path="/wishlist/" element={<WishlistPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
